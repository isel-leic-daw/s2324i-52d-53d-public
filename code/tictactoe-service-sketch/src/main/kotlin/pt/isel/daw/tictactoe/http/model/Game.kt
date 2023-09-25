package pt.isel.daw.tictactoe.http.model

import java.util.*

data class GamePlayInputModel(val userId : Int, val l: Int, val c: Int)

data class GameStartInputModel(val userIdX: Int, val userIdO: Int)

data class BoardOutputModel(val cells : String)

data class GameOutputModel(val id : UUID, val board : BoardOutputModel, val userIdX: Int, val userIdO: Int)