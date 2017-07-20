import QtQuick 2.7
import "../widget"

Room {
    id: room

    Column {
        anchors.centerIn: parent
        spacing: global.size.space

        Buzzon {
            text: "牌谱"
            textLength: 8
            onClicked: { global.pushScene("room/RoomReplay"); }
            anchors.horizontalCenter: parent.horizontalCenter
        }

        Buzzon {
            text: "牌型生成"
            textLength: 8
            onClicked: { global.pushScene("room/RoomGen"); }
            anchors.horizontalCenter: parent.horizontalCenter
        }
    }
}
