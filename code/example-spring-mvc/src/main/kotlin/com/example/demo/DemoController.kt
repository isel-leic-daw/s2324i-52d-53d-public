package com.example.demo

import jakarta.servlet.http.HttpServletRequest
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.http.HttpStatus
import org.springframework.http.ResponseEntity
import org.springframework.util.MultiValueMap
import org.springframework.web.bind.annotation.*

data class Student(
    val name : String,
    val number : Int
)

@RestController
@RequestMapping("/demo")
class DemoController {

    @GetMapping("0")
    fun handle0(): String {
        log.info("Handler One Called")
        return "Handle One"
    }

    @GetMapping("1/{id}")
    fun handle1(@PathVariable id : Int) = "id = ${id}"

    @GetMapping("2")
    fun handle2(@RequestParam id : Int?) = "id = ${id}"

    @GetMapping("3")
    fun handle3(@RequestParam parms : MultiValueMap<String,String>) =
        parms.map{"key = ${it.key} - value = ${it.value} "}.joinToString()

    @GetMapping("4")
    fun handle4() = Student("Filipe", 1234)

    @PostMapping("5")
    fun handle5(@RequestBody std : Student ) = std
        //"name : ${std.name} - number : ${std.number}"

    @PostMapping("6")
    fun handler6(
        request: HttpServletRequest,
        @RequestBody input: Student,
    ) = "Accept: ${request.getHeader("Accept")}, Body: $input }"

    @PostMapping("7")
    //@ResponseStatus(HttpStatus.CREATED)
    fun handler8(@RequestBody std : Student) = ResponseEntity
        .status(201)
        .body(std)

    companion object {
        private val log: Logger = LoggerFactory.getLogger(DemoController::class.java)
    }
}