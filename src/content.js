import axios from 'axios';
import cheerio from 'cheerio';
import { MathMLToLaTeX } from 'mathml-to-latex';
import OpenAI from 'openai';


const client = new OpenAI({
  apiKey: 'api-key-here',
  // dangerouslyAllowBrowser: true
});

(async () => {
  // getting contents of entire page
  const response = await axios.get(window.location.href);
  const html = response.data;

  const $ = cheerio.load(html);

  // finding relevant mathML content + converting to LaTeX
  $('mjx-container').each((index, element) => {
    const mathElement = $(element).find('mjx-assistive-mml').first();
    if (mathElement) {
      const mathHTML = mathElement.html();
      const mathLaTeX = MathMLToLaTeX.convert(mathHTML);
      $(element).replaceWith(`<span>${mathLaTeX}</span>`);
    }
  });

  $('input').remove();
  $('.input-group').remove();
  $('.knowl-container').remove();

  const $test = $('#output_problem_body');
  if ($test.length > 0) {
    const chatCompletion = await client.chat.completions.create({
      messages: [{ role: 'user', content: `The following math problem is formatted in LaTeX. Solve it. Your response should contain numerical answers formatted in an array like [Answer 1, Answer 2... etc] at the end. \n\n ${$test}`}],
      model: 'gpt-4o-mini',
    });
  
    console.log(chatCompletion);
    // console.log($test.html());
  } else {
    console.log("$test is empty...")
  }
})();
