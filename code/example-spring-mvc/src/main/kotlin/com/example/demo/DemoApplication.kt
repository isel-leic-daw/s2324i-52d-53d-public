package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.stereotype.Component
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@Component
class Service{}


@RestController
class Controller(val service: Service){
	@GetMapping("/examples/1")
	fun get() = "Hello Web"
}


@SpringBootApplication
class DemoApplication


fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)
}
