package pt.isel.daw.tictactoe.repository

import org.jdbi.v3.core.Jdbi
import org.springframework.stereotype.Component
import pt.isel.daw.tictactoe.domainmodel.Game
import java.util.*

@Component
class JdbiGamesRepository(private val jdbi : Jdbi) : GamesRepository {
    override fun getById(id : UUID) =
        jdbi.withHandle<Game?, Exception> { handle ->
            handle.createQuery("select id, board, player_x, player_o from dbo.games where id = :id")
                .bind("id", id)
                .mapTo(Game::class.java)
                .singleOrNull()
        }

    override fun update(game: Game) {
        jdbi.useHandle<Exception>{  handle ->
            handle.createUpdate("update dbo.games set board=:board where id=:id")
                .bind("id",game.id)
                .bind("board", game.board.toString())
                .execute()
        }
    }
    override fun insert(game: Game){
        jdbi.useHandle<Exception>{  handle ->
            handle.createUpdate(
                "insert into dbo.games(id, board, player_x, player_o) values (:id, :board, :player_x , :player_o)")
                .bind("id",game.id)
                .bind("board", game.board.toString())
                .bind("player_x", game.playerX)
                .bind("player_o", game.playerO)
                .execute()
        }
    }

}