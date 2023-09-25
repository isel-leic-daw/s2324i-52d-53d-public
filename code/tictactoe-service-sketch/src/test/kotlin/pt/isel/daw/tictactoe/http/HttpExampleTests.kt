package pt.isel.daw.tictactoe.http

import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Test
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.boot.test.web.server.LocalServerPort
import org.springframework.test.web.reactive.server.WebTestClient
import java.net.URI
import java.net.http.HttpClient
import java.net.http.HttpRequest
import java.net.http.HttpResponse

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class HttpExampleTests {

    @LocalServerPort
    var port: Int = 0

    @Test
    fun exampleTestUsingWebTestClient() {
        val client = WebTestClient.bindToServer().baseUrl("http://localhost:$port").build()
        client.get().uri("/users/1")
            .exchange()
            .expectStatus().isOk
            .expectBody()
            .jsonPath("username").isEqualTo("filipe")
    }

    @Test
    fun exampleUsingHttpClientOK() {
        val client = HttpClient.newHttpClient()
        val response = client.send(
            HttpRequest
                .newBuilder()
                .uri(URI("http://localhost:$port/users/1"))
                .GET()
                .build(),
            HttpResponse.BodyHandlers.ofString()
        )
        assertEquals(200, response.statusCode())
    }


}