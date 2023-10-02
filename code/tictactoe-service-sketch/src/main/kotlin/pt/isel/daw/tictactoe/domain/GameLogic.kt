package pt.isel.daw.tictactoe.domain
//TODO all the game play logic
fun play(game : Game, userId: Int, l: Int, c: Int) =
    game.copy(board= game.board.mutate(if(game.playerX==userId) CellState.PLAYER_X else CellState.PLAYER_O, l,c))