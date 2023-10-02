package pt.isel.daw.tictactoe.repository.jdbi

import org.jdbi.v3.core.Jdbi
import org.springframework.stereotype.Component
import pt.isel.daw.tictactoe.domain.User
import pt.isel.daw.tictactoe.repository.UsersRepository

@Component
class JdbiUsersRepository(private val jdbi : Jdbi) : UsersRepository{
    override fun getById(id: Int): User? {
        return jdbi.withHandle<User?, Exception> { handle ->
            handle.createQuery("select id, username from dbo.users where id = :id")
                .bind("id", id)
                .mapTo(User::class.java)
                .singleOrNull()
        }
    }

    override fun insert(name: String) {
        TODO("Not yet implemented")
    }

}