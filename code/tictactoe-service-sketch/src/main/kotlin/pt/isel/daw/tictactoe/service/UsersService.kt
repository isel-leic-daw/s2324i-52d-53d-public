package pt.isel.daw.tictactoe.service

import org.springframework.web.bind.annotation.*
import pt.isel.daw.tictactoe.http.model.UserInputModel
import pt.isel.daw.tictactoe.http.model.UserOutputModel
import pt.isel.daw.tictactoe.service.UsersService

import org.springframework.stereotype.Component
import pt.isel.daw.tictactoe.repository.UsersRepository
import pt.isel.daw.tictactoe.service.exception.NotFoundException

@Component
class UsersService(private val userRepository: UsersRepository) {

    fun getById(id : Int) = userRepository.getById(id)?:throw NotFoundException()
    fun insert(name : String) {
        TODO("Not yet implemented")
    }


}