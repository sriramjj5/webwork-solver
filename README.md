# webwork-solver 

### On hold until I can finesse access to a WebWork page again.


Browser extension to auto-solve WebWork assignments.

Currently only works with assignments formatted as MathML, with no images embedded (ie. most math assignments).

Vague current plan -- 

1/ Front-end. User clones, does the necessary setup (what is this?), provides openAI API key, adds the extension to Chrome themselves. When they click the 'Solve' button on the extension, it should autofill each answer field. 

2/ Adding a back-end. Thinking of securing the OpenAI API key using Vercel (serverless functions). Also need to find a way to prevent others using Vercel as a proxy to the OpenAI API -- some combination of smart CORS use, rate limiting, and adding a log-in mechanism (likely Firebase auth) should work reasonably well.


