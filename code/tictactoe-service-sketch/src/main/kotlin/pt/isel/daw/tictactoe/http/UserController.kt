package pt.isel.daw.tictactoe.http

import org.springframework.web.bind.annotation.*
import pt.isel.daw.tictactoe.http.model.UserInputModel
import pt.isel.daw.tictactoe.http.model.UserOutputModel
import pt.isel.daw.tictactoe.service.UsersService

@RestController
class UsersController(private val usersService : UsersService) {

    @GetMapping(PathTemplate.USER_BY_ID)
    fun getById(@PathVariable id : Int) : UserOutputModel {
        val user = usersService.getById(id)
        return UserOutputModel(user.id,user.username)

    }

    @PostMapping(PathTemplate.CREATE_USER)
    fun insert(@RequestBody user : UserInputModel) {
        TODO("Not yet implemented")
    }

}