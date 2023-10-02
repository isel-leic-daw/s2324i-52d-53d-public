import org.springframework.http.MediaType

data class ProblemJsonModel(val type : String, val title : String? = null){
    companion object {
        val MEDIA_TYPE = MediaType.parseMediaType("application/problem+json")
    }
}