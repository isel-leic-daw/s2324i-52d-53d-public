package pt.isel.daw.tictactoe.domain

import java.util.UUID

const val GAME_SIZE = 3

enum class CellState(val char: Char) {
    EMPTY('-'),
    PLAYER_X('X'),
    PLAYER_O('O');

    companion object {
        fun fromChar(c: Char) = when (c) {
            '-' -> EMPTY
            'X' -> PLAYER_X
            'O' -> PLAYER_O
            else -> throw IllegalArgumentException("Invalid value for Board.State")
        }
    }
}

data class Board(private val cells : Array<Array<CellState>>){

    fun get(l : Int, c : Int) = cells[l][c]
    fun mutate(state: CellState, playLine : Int, playCol : Int) : Board{
        val newBoardCells = Array(GAME_SIZE) { l-> Array(GAME_SIZE) { c-> cells[l][c] } }
        newBoardCells[playLine][playCol]=state
        return Board(newBoardCells)
    }

    companion object {
        fun create() = Board(Array(GAME_SIZE) { Array(GAME_SIZE) { CellState.EMPTY } })

        //TODO
        fun fromString(s: String): Board {
            require(s.length == GAME_SIZE * GAME_SIZE)
            return Board(
                arrayOf(
                    arrayOf(
                        CellState.fromChar(s[0]),
                        CellState.fromChar(s[1]),
                        CellState.fromChar(s[2]),
                    ),
                    arrayOf(
                        CellState.fromChar(s[3]),
                        CellState.fromChar(s[4]),
                        CellState.fromChar(s[5]),
                    ),
                    arrayOf(
                        CellState.fromChar(s[6]),
                        CellState.fromChar(s[7]),
                        CellState.fromChar(s[8]),
                    )
                )
            )
        }
    }

    override fun toString(): String = cells.flatMap { row ->
        row.map { it.char }
    }.joinToString("")

}

data class Game(
    val id : UUID,
    val board : Board,
    val playerX : Int,
    val playerO : Int,
)