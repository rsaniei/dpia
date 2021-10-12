package oeg.dpia.chat.main;

import org.alicebot.ab.Bot;
import org.alicebot.ab.Chat;
import org.alicebot.ab.configuration.BotConfiguration;

/**
 * This main class demonstrates a simple example of using AIML.
 * AIML syntax: https://www.tutorialspoint.com/aiml/aiml_star_tag.htm 
 * @author vroddon
 */
public class Main {
    public static void main(String []args)
    {
        Bot alice = new Bot(BotConfiguration.builder().name("dpia").path("chat2\\src\\main\\resources").build());
        Chat chatSession = new Chat(alice);
        String answer = chatSession.multisentenceRespond("I like Beethoven");
        System.out.println(answer);
        answer = chatSession.multisentenceRespond("HELLO DPIA Assistant");
        System.out.println(answer);
    }
    
}
