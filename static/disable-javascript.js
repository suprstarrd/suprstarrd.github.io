// Edited from https://disable-javascript.org to be more appropriate for 14+ audiences.
//
// No license file has been made (yet!) but the code is source-available on Codeberg: https://codeberg.org/mrus/disable-javascript.org
// It can definitively be used under CC BY-NC-SA 4.0 through its use on the creators website. Unfortunately, this is not a LibreJS-compatible license.
// The disable-javascript.org website, however, says "you are free to use the code below and modify it according to your needs", which appears to indicate this code is intended as public domain.
// As such, I am treating this as being licensed under Creative Commons CC0 1.0 Universal until further notice.
// For the latest licensing information, see the latest commits at the Codeberg link above.
//
// This code has been modified to fit the needs of suprstarrd.com, and will continue to be. Future modifications are under the GNU Affero General Public License, version 3 or (at your option) any later version; unless マリウス declares this code is under a license incompatible.
// TODO: Use local storage where possible to determine the amount of times the popup has run
// TODO: Prevent this from running when embedded in an iframe (e.g. Kagi Small Web)

// @license magnet:?xt=urn:btih:90dc5c0be029de84e523b9b3922520e79e0e6f08&dn=cc0.txt CC0-1.0
function favicons() {
  this.hidden = "hidden";
  this.visibilityChange = "visibilitychange";
  this.favicon = document.querySelector("[rel='shortcut icon']").href;
  this.title = document.title;
  this.wasSpoofed = false;
  this.spoofed = [];

  this.services = {
    sy: () => {
      let title =
        "Official Church of Scientology: Difficulties on the Job - Online Course";
      let favicon = "/images/disablejs/sy.png";
      return {
        title,
        favicon,
      };
    },
    cdc: () => {
      let title = "Ask HN: How could I safely contact drug cartels?";
      let favicon = "/images/disablejs/hn.png";
      return {
        title,
        favicon,
      };
    },
    rps: () => {
      let title = "rust programming socks - Google Shopping";
      let favicon = "/images/disablejs/go.ico";
      return {
        title,
        favicon,
      };
    },
    pul: () => {
      let title = "Pick up lines suggestions - ChatGPT";
      let favicon = "/images/disablejs/cgpt.png";
      return {
        title,
        favicon,
      };
    },
    tsm: () => {
      let title = "Amazon.com: new england patriots merch";
      let favicon = "/images/disablejs/az.ico";
      return {
        title,
        favicon,
      };
    },
    wp: () => {
      let title = "Amazon.com: body pillows";
      let favicon = "/images/disablejs/az.ico";
      return {
        title,
        favicon,
      };
    },
    rwsb: () => {
      let title = "wallstreetbets";
      let favicon = "/images/disablejs/rd.png";
      return {
        title,
        favicon,
      };
    },
    tac: () => {
      let title = "Twilight (Twilight Saga, #1) by Stephenie Meyer | Goodreads";
      let favicon = "/images/disablejs/gr.png";
      return {
        title,
        favicon,
      };
    },
    nxfs: () => {
      let title = "Insatiable | Netflix";
      let favicon = "/images/disablejs/nx.ico";
      return {
        title,
        favicon,
      };
    },
    jbn: () => {
      let title = "pooped pants - Google Search";
      let favicon = "/images/disablejs/go.ico";
      return {
        title,
        favicon,
      };
    },
    nggyu: () => {
      let title = "Rick Astley - Never Gonna Give You Up - YouTube";
      let favicon = "/images/disablejs/yt.ico";
      return {
        title,
        favicon,
      };
    },
    beast: () => {
      let title = "Cocomelon - Nursery Rhymes - YouTube";
      let favicon = "/images/disablejs/yt.ico";
      return {
        title,
        favicon,
      };
    },
    ftx: () => {
      let title = "FTX Cryptocurrency Exchange";
      let favicon = "/images/disablejs/ftx.png";
      return {
        title,
        favicon,
      };
    },
  };

  this.enabledServices = Object.keys(this.services);

  this.init = function () {
    if (typeof document.mozHidden !== "undefined") {
      this.hidden = "mozHidden";
      this.visibilityChange = "mozvisibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
      this.hidden = "msHidden";
      this.visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
      this.hidden = "webkitHidden";
      this.visibilityChange = "webkitvisibilitychange";
    }
    document.addEventListener(
      this.visibilityChange,
      this.handler.bind(this),
      false,
    );
  };

  if (!this.displayCount) this.displayCount = 0;
  this.default = function () {
    let title = this.title;
    let favicon = this.favicon;
    displayCount = displayCount + 1;
    this.update({
      title,
      favicon,
    });
  };

  this.update = function (data) {
    let cacheBuster = "?v=" + Math.round(Math.random() * 10000000);
    let link = document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "shortcut icon";
    link.href = data.favicon + cacheBuster;
    document
      .getElementsByTagName("head")[0]
      .querySelector("[rel='shortcut icon']")
      .remove();
    document.getElementsByTagName("head")[0].appendChild(link);
    document.title = data.title;
    if (this.wasSpoofed === true && this.displayCount < 3) {
      document.getElementById("disablejs").style.display = "block";
      document.getElementById("disablejs").innerHTML = `
        <p>
          <strong>(CLICK/TAP THIS OVERLAY ANYWHERE TO CLOSE IT)</strong>
        </p>
        <p>
          Ah, yes. That moment. The one that sends a chill down your spine. You know <strong>exactly</strong> what I'm talking about: That split second when you spot <em>that website</em> in your browser's tab bar. Your heart begins pounding. You dart a glance at your coworkers, your friends, your partner, or anyone in the vicinity, searching for signs of judgment or, worse, curiosity. No one's looking, but somehow, you feel like everyone is. It's like the universe knows, and it's giggling behind its hand. You quickly click over to the tab, praying, hoping it's not what you think it is.
        </p>
        <p>
          Then, oh sweet relief, it's not <strong>that</strong>. But now, a whole new, equally horrible truth sinks in. You've just been pranked by the cruel, merciless soul who crafted this website. You, my friend, have just experienced the finest torture modern web technology has to offer. Unwarranted suspense, followed by the revelation that <em>nothing is as it seems</em>.
        </p>
        <p>
          JavaScript, you son of a smoking gun. The great trickster of the web, slinking in the background, making you believe that your browsing experience is smooth and simple... only to slap you with a pop-up, a subtle redirect, or worse, a blinking ad that's seemingly impossible to close.
        </p>
        <p>
          Now here you are, caught in the endless cycle of knowing you should turn JavaScript off but just <strong>not</strong> caring enough to actually do it. So, here it is, loud and clear: <strong>Turn JavaScript off, now, and only allow it on websites you trust!</strong> Save your sanity, preserve your dignity, and maybe give your browser a fighting chance at actually doing what <strong>you</strong> want it to do. Because if you don't, the next time you see that icon, your heart might not only drop, it might skip a beat or two.
        </p>
        <p>
          Don't know what this is about? Open a new tab and notice how the icon and title of this page change in the background. <a href="https://disable-javascript.org" target="_self" title="disable-javascript.org">More information here.</a> This is an initiative by <a id="mrus" href="https://マリウス.com" target="_self">マリウス <i>(note: 18+ website)</a>.
        </p>
        <p>
          <strong>(CLICK/TAP THIS OVERLAY ANYWHERE TO CLOSE IT)</strong>
        </p>
        `;
        if (location.host.endsWith('.onion')) document.getElementById("disablejs").getElementById("mrus").href = "http://z5yuzvitz4lynnaijdwmu6gkh2lnkjqmasv2jknf3biz6tkyxd4uszyd.onion"
        if (location.host.endsWith('.i2p')) document.getElementById("disablejs").getElementById("mrus").href = "http://ltrrxt4aywqa2jzviwkacsoc22zfhfe7ljm2iknxjjsil6i4i7nq.b32.i2p"
    }
  };

  this.spoof = function () {
    let i = 0;
    if (this.spoofed.length === this.enabledServices.length) {
      this.spoofed.length = 0;
    }
    for (let es = 0; es < this.enabledServices.length; es++) {
      i = Math.round(Math.random() * (this.enabledServices.length - 1));
      if (this.spoofed.includes(i) === false) {
        break;
      }
    }
    this.spoofed.push(i);
    let service = this.enabledServices[i];
    if (service && this.services[service]) {
      this.update(this.services[service]());
    }
    this.wasSpoofed = true;
  };

  this.handler = function () {
    if (document[this.hidden] && this.displayCount < 3) {
      this.spoof();
    } else {
      this.default();
    }
  };

  this.init();
}

function closeDisablejsInfo() {
  document.getElementById("disablejs").style.display = "none";
}

document.getElementById("disablejs").onclick = closeDisablejsInfo;
document.addEventListener("DOMContentLoaded", function(){favicons()});
// @license-end