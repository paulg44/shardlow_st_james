## Shardlow St James

https://www.ssjfc.co.uk

# Overview

A complete website from design => build => deploy => maintain. The main problem this project solves
is having all the relevant information for the amateur football club Shardlow St James all in one easy
accessible place. This hopefully will drive further engagement with the club and in turn produce
more revenue going forward.

# Tech Stack

- Frontend: React
- Styling: Custom CSS & Bootstrap
- API's: Full time FA lr code system
- Testing: React Testing Library & Cypress

# Takeaways and Future Improvement

The main takeaway from building this site has been working directly with clients and making sure both client
and developer understand the scope of the project. This helps the project run smoothly. Secondly, how a React
project is structured is important. Whilst the application works as expected I have had a few issues around
unit testing, partly because of how some props are being handed around the application.
Future improvement: Currently the news feed page has to be updated manually. I am in the process of
building a "bot" that extracts the single part of a URL I need to update and this can then be automated. Also,
the club collects "subs" from each player each month. There is scope to build a Stripe subscription system and
login functionality so the club can take charge of their own finances.

# Run Local

Whilst theres not a huge amount of functionality if you wish to run locally these are the steps:

- git clone https://github.com/paulg44/shardlow_st_james.git
- cd ssj
- npm install
- To run tests: npm test

You do not have to install anything in the server folder. This was an early attempt to add admin access. It may
be something that gets revisited in the future.
