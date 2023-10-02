package pt.isel.daw.tictactoe.repository

import pt.isel.daw.tictactoe.domain.Game
import java.util.*


interface GamesRepository {
    fun getById(id : UUID) : Game?
    fun update(game: Game)
    fun insert(game: Game)
}