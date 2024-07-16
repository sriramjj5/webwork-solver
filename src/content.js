import axios from 'axios';
import cheerio from 'cheerio';
import { MathMLToLaTeX } from 'mathml-to-latex';

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
    console.log($test.html());
  } else {
    console.log("$test is empty...")
  }
})();
