import QtQuick 2.7

ListView {
    id: frame

    property bool animEnabled: true
    property bool upDown: false // upside down discarding for kuro and yuu
    property string tileSet: "std"
    property color backColor
    property real tw

    property bool showCircle: false
    property bool flashCircle: false
    property point outCoord

    width: 6 * tw;
    height: 1.35 * tw
    orientation: Qt.Horizontal;
    interactive: false
    delegate: Item {
        width: tile.width
        height: tile.height

        Rectangle {
            id: blinkingCircle
            anchors.centerIn: parent
            width: 2 * tw
            height: 2 * tw
            color: "#00000000"
            border.color: "white"
            border.width: 2
            radius: width / 2
            visible: showCircle && flashCircle && index === frame.model.count - 1
            SequentialAnimation on opacity {
                PropertyAnimation { to: 0; duration: 500 }
                PropertyAnimation { to: 0.5; duration: 500 }
                loops: Animation.Infinite
                running: true
            }
        }

        Rectangle {
            id: solidCircle
            anchors.centerIn: parent
            width: 2 * tw
            height: 2 * tw
            color: "#00000000"
            border.color: "white"
            border.width: 2
            radius: width / 2
            visible: showCircle && !flashCircle && index === frame.model.count - 1
        }

        Tile {
            id: tile
            tileSet: frame.tileSet
            tileWidth: tw
            tileStr: modelTileStr
            backColor: frame.backColor
            lay: modelLay
            transform: Rotation {
                angle: upDown && !tile.lay ? 180 : 0
                origin.x: width / 2
                origin.y: height / 2
            }
        }
    }

    add: Transition {
        enabled: frame.animEnabled
        SequentialAnimation {
            NumberAnimation {
                property: "y"
                from: outCoord.y
                to: 0.1 * tw
                duration: 140
                easing.type: Easing.InQuad
            }

            PauseAnimation {
                duration: 300
            }

            NumberAnimation {
                property: "y"
                to: 0
                duration: 200
                easing.type: Easing.Linear
            }
        }

        SequentialAnimation {
            NumberAnimation {
                property: "x"
                from: outCoord.x
                to: (frame.model.count - 0.4) * tw
                duration: 140
                easing.type: Easing.InQuad
            }

            PauseAnimation {
                duration: 300
            }

            NumberAnimation {
                property: "x"
                duration: 200
                easing.type: Easing.InOutQuad
            }
        }

        ScriptAction {
            script: {
                global.sound.discard.play();
            }
        }
    }
}
