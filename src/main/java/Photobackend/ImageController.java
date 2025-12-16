package Photobackend;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class ImageController {
	
    private final AIImageService aiImageService;

    public ImageController(AIImageService aiImageService) {
        this.aiImageService = aiImageService;
    }

	@PostMapping("/generate")
	public ResponseEntity<String> generateImage(
	        @RequestParam("photo") MultipartFile photo) {

	    System.out.println("POST API HIT ");
	    System.out.println("Received file: " + photo.getOriginalFilename());
	    System.out.println("File size: " + photo.getSize());

	    return ResponseEntity.ok("https://picsum.photos/400");
	}

}
