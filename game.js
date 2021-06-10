function Game(){
    game = {
        "request": gameCookieRequest,
        "saved": gameSaved,
        "level": gameLevel,
        "player": {
            x: player.object.x,
            y: player.object.y,
            health: player.health,
            bullets: player.bullets
        },
        "zombie1": {
            x: zombie1.object.x,
            y: zombie1.object.y,
            health: zombie1.health,
        },
        "zombie2": {
            x: zombie2.object.x,
            y: zombie2.object.y,
            health: zombie2.health,
        },
        "skeleton1": {
            x: skeleton1.object.x,
            y: skeleton1.object.y,
            health: skeleton1.health,
        },
    }
}