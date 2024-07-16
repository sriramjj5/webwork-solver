# webwork-solver
Browser extension to solve WebWork assignments.

Currently only works with assignments formatted as MathML; I currently don't have access to any WebWork pages that are formatted any other way :\(. Also won't work with circuit diagrams and such since those are embedded as images, I think?

Current plan -- 

1/ Just the front-end. User clones, does the necessary setup (what is this?), provides openAI API key, adds the extension to Chrome themselves. When they click the 'Solve' button on the extension, it should autofill each answer field. 

2/ Adding a back-end. Thinking of securing the openAI API key using Vercel (serverless fn). Need to find a way to prevent others using Vercel as a proxy to the openAI API -- maybe some combination of CORS (gotta look up what this is exactly), rate limiting, log-in mechanism (Firebase auth?) etc. 


