import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = 'https://drjntyswqrfqxzmbomgh.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyam50eXN3cXJmcXh6bWJvbWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgxNzM4NjEsImV4cCI6MTk4Mzc0OTg2MX0.g97tTGb71dkXex8T9dh4GAn5q5RBS5rrUvoDAbKm3ek';
const supabase = createClient(PROJECT_URL, API_KEY)


export function videoService() {

    return {
        getAllVideos() {
            return supabase.from("Video")
                .select("*")

        }
    }
}