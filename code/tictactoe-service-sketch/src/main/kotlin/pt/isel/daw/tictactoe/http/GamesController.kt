package pt.isel.daw.tictactoe.http

import org.springframework.http.MediaType
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import pt.isel.daw.tictactoe.http.model.BoardOutputModel
import pt.isel.daw.tictactoe.http.model.GameOutputModel
import pt.isel.daw.tictactoe.http.model.GamePlayInputModel
import pt.isel.daw.tictactoe.http.model.GameStartInputModel
import pt.isel.daw.tictactoe.service.GamesService
import pt.isel.daw.tictactoe.service.exception.NotFoundException
import java.util.*

@RestController
class GamesController (private val gamesService : GamesService) {

    //TODO
    @ExceptionHandler(value = [NotFoundException::class])
    fun exceptionHandler() = ResponseEntity
        .status(404)
        .body("GAME NOT FOUND")

    @GetMapping(PathTemplate.GAME_BY_ID)
    fun getGame(@PathVariable id : UUID) :GameOutputModel{
        val game = gamesService.getById(id)
        return GameOutputModel(game.id, BoardOutputModel(game.board.toString()), game.playerX, game.playerO)
    }

    @PostMapping(PathTemplate.PLAY)
    fun play(@PathVariable id: UUID, @RequestBody p: GamePlayInputModel): GameOutputModel {
        val game = gamesService.play(id, p.userId, p.l, p.c)
        return GameOutputModel(game.id, BoardOutputModel(game.board.toString()), game.playerX, game.playerO)
    }

    @PostMapping(PathTemplate.START)
    fun startGame(@RequestBody s: GameStartInputModel): ResponseEntity<GameOutputModel> {
        val game = gamesService.start(s.userIdX, s.userIdO)
        val gameOutModel = GameOutputModel(game.id, BoardOutputModel(game.board.toString()), game.playerX, game.playerO)
        return ResponseEntity.status(201).contentType(MediaType.APPLICATION_JSON).body(gameOutModel)
    }
}