package pt.isel.daw.tictactoe.repository

import pt.isel.daw.tictactoe.domainmodel.User

interface UsersRepository {
    fun getById(id : Int) : User?
    fun insert(name : String)
}