import QtQuick 2.7
import QtQuick.Window 2.2
import QtMultimedia 5.7
import rolevax.sakilogy 1.0
import "area"
import "widget"

Window {
    id: window

    readonly property bool mobile: Qt.platform.os === "android" || Qt.platform.os === "ios"

    readonly property var global: {
        "version": "v" + PGlobal.version,
        "window": window,
        "mobile": mobile,
        "windows": Qt.platform.os === "windows",
        "size": {
            "smallFont": (mobile ? 0.030 : 0.027) * window.height,
            "middleFont": (mobile ? 0.040 : 0.032) * window.height,
            "defaultFont": (mobile ? 0.032 : 0.030) * window.height,
            "space": (mobile ? 0.009 : 0.007) * window.height,
            "gap": (mobile ? 0.054 : 0.042) * window.height
        },
        "color": {
            "text": "#AAAAAA",
            "back": "#22000000"
        },
        "sound": {
            "button": soundButton,
            "toggle": soundToggle,
            "select": soundSelect,
            "discard": soundDiscard,
            "bell": soundBell
        },
        "pushScene": pushScene,
        "currGirlId": 0
    }

    property var _roomStack: []

    visible: true
    width: 1207; height: 679
    color: PGlobal.themeBack
    title: (PClient.loggedIn ? PClient.user.Username + "@" : "") + "松饼麻雀 " + global.version

    Image {
        id: background
        anchors.fill: parent
        source: "image://impro/background"
    }

    SoundEffect { id: soundButton; muted: PGlobal.mute; source: "qrc:///sound/button.wav" }
    SoundEffect { id: soundToggle; muted: PGlobal.mute; source: "qrc:///sound/toggle.wav" }
    SoundEffect { id: soundSelect; muted: PGlobal.mute; source: "qrc:///sound/select.wav" }
    SoundEffect { id: soundDiscard; muted: PGlobal.mute; source: "qrc:///sound/discard.wav" }
    SoundEffect { id: soundBell; muted: PGlobal.mute; source: "qrc:///sound/bell.wav" }

    Loader {
        id: loader
        anchors.fill: parent
        source: "room/RoomMain.qml"
        onLoaded: {
            PGlobal.forceImmersive();
            loader.focus = true;
            item.closed.connect(popRoom);
        }
    }

    Shortcut {
        sequence: "F11"
        onActivated: {
            if (window.visibility === Window.Windowed)
                window.visibility = Window.FullScreen;
            else if (window.visibility === Window.FullScreen)
                window.visibility = Window.Windowed;
        }
    }

    Connections {
        target: PClient

        onRemoteClosed: {
            _roomStack = [];
            loader.source = "room/RoomMain.qml";
        }
    }

    function pushScene(name) {
        _roomStack.push(loader.source);
        loader.source = name + ".qml";
    }

    function popRoom() {
        var top = _roomStack.pop();
        loader.source = top;
    }
}
