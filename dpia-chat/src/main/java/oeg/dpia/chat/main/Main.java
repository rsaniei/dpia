package oeg.dpia.chat.main;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import org.alicebot.ab.AIMLProcessor;
import org.alicebot.ab.Bot;
import org.alicebot.ab.Chat;
import org.alicebot.ab.MagicStrings;
import org.alicebot.ab.PCAIMLProcessorExtension;
//import org.alicebot.ab.configuration.BotConfiguration;

/**
 * This main class demonstrates a simple example of using AIML. AIML syntax:
 * https://www.tutorialspoint.com/aiml/aiml_star_tag.htm
 * 
 * @author vroddon
 */
public class Main {

    public static void main(String[] args) {
        // The AIML file is in the src/main/resources/bots/dpia/aiml subfolder
        MagicStrings.root_path = "src/main/resources";
        AIMLProcessor.extension = new PCAIMLProcessorExtension();
        Bot alice = new Bot("dpia");
        Chat chatSession = new Chat(alice);
        System.out.println("Welcome to this chat!");
//        String answer = "";
        while (true) {
            try {
                BufferedReader reader = new BufferedReader(new InputStreamReader(System.in));
                String input = reader.readLine();
                if (input.equals("exit"))
                    break;
                String answer = chatSession.multisentenceRespond(input);
                System.out.println("Input is=>" + input);
                System.out.println("Answer is=>" + answer);
                
                String question1 = chatSession.predicates.get("question1");
                System.out.println(question1 + " - " + answer);
            } catch (Exception e) {
                e.printStackTrace();
            }
        }

    }

}
