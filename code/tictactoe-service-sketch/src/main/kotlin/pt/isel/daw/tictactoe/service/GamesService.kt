package pt.isel.daw.tictactoe.service

import org.springframework.stereotype.Component
import pt.isel.daw.tictactoe.domainmodel.Board
import pt.isel.daw.tictactoe.domainmodel.CellState
import pt.isel.daw.tictactoe.domainmodel.Game
import pt.isel.daw.tictactoe.repository.GamesRepository
import pt.isel.daw.tictactoe.service.exception.NotFoundException
import java.util.*

@Component
class GamesService(private val gamesRepository: GamesRepository) {

    fun play(id : UUID, userId : Int, l : Int ,c : Int) : Game {
        val game = gamesRepository.getById(id)?:throw NotFoundException()
        val updatedGame = game.copy(board= game.board.mutate(if(game.playerX==userId) CellState.PLAYER_X else CellState.PLAYER_O, l,c))
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