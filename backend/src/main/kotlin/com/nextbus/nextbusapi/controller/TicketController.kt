package com.nextbus.nextbusapi.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("")
class TicketController {
    @GetMapping
    fun helloWorld(): String{
        return "Hello World"
    }
}