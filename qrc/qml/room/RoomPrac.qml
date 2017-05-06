import QtQuick 2.7
import "../widget"

Room {
    id: room

    Column {
        anchors.centerIn: parent
        spacing: global.size.space

        Buzzon {
            text: "AI战"
            textLength: 8
            onClicked: { loader.source = "RoomGameFree.qml"; }
            anchors.horizontalCenter: parent.horizontalCenter
        }

        Buzzon {
            text: "牌效练习"
            textLength: 8
            onClicked: { loader.source = "RoomEff.qml"; }
            anchors.horizontalCenter: parent.horizontalCenter
        }

        Buzzon {
            text: "国标练习"
            textLength: 8
            onClicked: { loader.source = "RoomEffGB.qml"; }
            anchors.horizontalCenter: parent.horizontalCenter
        }
    }

    Loader {
        id: loader
        anchors.fill: parent
        onLoaded: {
            room.focus = false;
            loader.focus = true;
            item.closed.connect(closeRoom);
        }
    }

    function closeRoom() {
        loader.source = "";
    }

}
