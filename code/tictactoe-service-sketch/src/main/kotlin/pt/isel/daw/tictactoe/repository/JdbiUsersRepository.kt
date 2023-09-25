package pt.isel.daw.tictactoe.repository

import org.springframework.stereotype.Component
import pt.isel.daw.tictactoe.domainmodel.User

@Component
class JdbiUsersRepository : UsersRepository {
    override fun getById(id: Int): User? {
        TODO("Not yet implemented")
    }

    override fun insert(name: String) {
        TODO("Not yet implemented")
    }
}