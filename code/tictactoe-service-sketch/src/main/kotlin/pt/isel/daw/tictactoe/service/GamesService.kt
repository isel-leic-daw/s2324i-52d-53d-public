package pt.isel.daw.tictactoe.service

import org.springframework.stereotype.Component
import pt.isel.daw.tictactoe.domain.Board
import pt.isel.daw.tictactoe.domain.CellState
import pt.isel.daw.tictactoe.domain.Game
import pt.isel.daw.tictactoe.domain.play
import pt.isel.daw.tictactoe.repository.GamesRepository
import pt.isel.daw.tictactoe.service.exception.NotFoundException
import java.util.*

@Component
class GamesService(private val gamesRepository: GamesRepository) {

    fun getById(id : UUID) = gamesRepository.getById(id)?:throw NotFoundException()
    fun play(id : UUID, userId : Int, l : Int ,c : Int) : Game {
        val game = gamesRepository.getById(id)?:throw NotFoundException()
        val updatedGame = play(game,userId,l,c)
        gamesRepository.update(updatedGame)
        return updatedGame
    }

    fun start(userIdX : Int, userIdO : Int) :Game {
        val newGame = Game(
            UUID.randomUUID(),
            Board.create(),
            userIdX,
            userIdO
        )
        gamesRepository.insert(newGame)
        return newGame
    }

}