const express = require("express");
const superagent = require("superagent");
const PORT = process.env.PORT;

const app = express();
let req = superagent
  .get("https://api.github.com/search/repositories")
  .query("q=language:JavaScript")
  .set({ "user-agent": "Octosearch" })
  .query({ q: "butts" })

  // order ascending or descending
  // when switching from MOST STARS/RELEVACE/FORKS to/from
  // LEAST STARS/RELEVANCE/FORKS, flip the order from "desc" to "asc"
  // .query({ o: "desc" })

  // .sortQuery((a, b) => a.length - b.length) I coudl do this instead of changing the request to github
  //  filter by language ~~ NOT WORKING, getting more than just javascript

  // sort by stars/relevance/forks
  // .query({ s: "stars" })

  // sort by score
  // .query({ o: "desc" })
  // when the function is done, do this
  // .end(function (error, result) {
  //   console.log(result.req._header);
  // });

  .end((err, res) => {
    if (err) {
      return console.log(err);
    }
    console.log(res.body);
    console.log(res.req._header);
  });

// request.get("/repository").query("id=id"); How do I get the specific repo once I've found the one I want, and how do I build a route based on that.
// holy shit I haven't worked with server side code in forever D:
