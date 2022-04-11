const $body = $(".tweetContainer");
const $update = $("#update");
const $submitButt = $(".sendTweet");
const $userText = $(".userInput");
const $streamBool = $("#streamBool");
var constantUpdate = true;
//$body.html("");

let count = 0;
let loaded = [];

let o = new Intl.DateTimeFormat("en", {
  timeStyle: "medium",
  dateStyle: "short",
});

function displayTweets() {
  let catSelection = Math.floor(Math.random() * 10);
  count += 1;
  let index = streams.home.length - 1;
  while (index >= loaded.length - 1) {
    const tweet = streams.home[index];
    const $tweet = $("<div></div>");
    if (count > 1) $tweet.addClass("new");
    $tweet.html(
      `<img src="images/catPic${catSelection}.png" alt="cat" width="50" class="catStart"><div><div class="userDisp">@${
        tweet.user
      }</div><div>: ${tweet.message} || ${o.format(Date.now())}</div></div> `
    );
    $tweet.addClass("tweet");
    $(".userDisp").attr("onclick", "filterM(this.innerText)");
    $body.prepend($tweet);
    loaded.push($tweet);
    index -= 1;
  }
}

function filterM(filterName) {
  //constantUpdate = false;
  $(".userDisp")
    .filter(function () {
      if (this.innerText !== filterName) {
        return this;
      }
    })
    .parent()
    .parent()
    .remove();
}

//const tweetSub = document.querySelector('.sendTweet')
$submitButt.click(() => {
  let catSelection = Math.floor(Math.random() * 10);
  var $twooted = $("<div></div>").html(
    `<img src="images/catPic${catSelection}.png" alt="cat" width="50" class="catStart"><div><div class="userDisp">@fat_orange_cat</div><div>: ${$userText.val()} || ${o.format(
      Date.now()
    )}</div></div>`
  );
  $twooted.addClass("tweet newUserTwoot");
  $(".userDisp").attr("onclick", "filterM(this.innerText)");
  $userText.val();
  $twooted.html();
  $body.prepend($twooted);
  $userText.val("");
});

$update.on("click", displayTweets);
$(".userDisp").attr("onclick", "filterM(this.innerText)");
displayTweets();
var interval;
$("#streamOn").on("click", () => {
  interval = setInterval(displayTweets, 100);
});
$("#streamOff").on("click", () => {
  clearInterval(interval);
});
console.log(constantUpdate);
//let constantUpdate = true;

//}
//setInterval(displayTweets, 100)
