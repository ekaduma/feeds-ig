// Array of objects feeds user ig
feeds = [
  {
    feed_id: 1,
    username: "Ronaldo",
    photo: "/img/cr-30.jpg",
    photo_mid: "/img/g-1.png",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero necessitatibus illum nulla quam veritatis, expedita temporibus inventore ipsum odio excepturi voluptatem ratione, quaerat corporis dolor eos. A minima quaerat labore enim, quos facilis, expedita ratione provident vero omnis deserunt ut alias cupiditate corporis nemo consectetur consequuntur in veniam rerum iste?",
    likes: 123,
    date: new Date("09/01/2022"),
  },

  {
    feed_id: 2,
    username: "Luffy",
    photo: "/img/luffy.jpg",
    photo_mid: "/img/g-2.png",
    caption: "Gomu-gomu jet",
    likes: 122.122,
    date: new Date("08/22/2022"),
  },

  {
    feed_id: 3,
    username: "Slash",
    photo: "/img/Slash.jpg",
    photo_mid: "/img/g-3.png",
    caption: "Welcome to the junggle",
    likes: 122.13,
    date: new Date("08/21/2022"),
  },

  {
    feed_id: 4,
    username: "Synster",
    photo: "/img/synynster.jpg",
    photo_mid: "/img/g-4.png",
    caption: "Dear god ",
    likes: 121.113,
    date: new Date("08/20/2022"),
  },
];

const feedsContainer = document.getElementById("feeds");

const allFeeds = feeds.map((feed) => {
  // Change date
  let postFeed = feed.date;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0");
  let yyyy = today.getFullYear();
  today = new Date(`${mm} / ${dd} / ${yyyy}`);
  let time = today.getTime() - postFeed.getTime();
  let days = time / (1000 * 3600 * 24);

  return `<div class='feed bg-white border-2 rounded-md drop-shadow-md'>
              <div class="top-bar p-2">
                <div class="on-bar flex justify-between">
                  <div class="img-p flex items-center">
                    <img src="${feed.photo}" alt="ig" id="img-user" class="rounded-full drop-shadow-md shadow-black mr-2" />
                    <a href="" class="font-medium text-gray-800" id="username">${feed.username}</a>
                  </div>
  
                  <div class="right-i">
                    <a href=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                          <path fill-rule="evenodd" d="M4.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zm6 0a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" clip-rule="evenodd" />
                        </svg>
                    </a>
                  </div>
                </div>
              </div>
  
              <div class="content-img-mid">
                <img src="${feed.photo_mid}" alt="" id="photo_mid" />
              </div>
  
              <div class="icons p-2">
                <div class="flex justify-between">
                  <div class="right-icons flex space-x-3">
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                    </a>
  
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                        />
                      </svg>
                    </a>
  
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                      </svg>
                    </a>
                  </div>
  
                  <div class="left-icons">
                    <a href="" class="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
  
              <div class="likes p-2 -mt-2 text-xs">
                <span class="text-black-900 font-bold">Likes <a href="" class="text-black-900 font-bold" id="likes">${feed.likes}</a></span>
              </div>
  
              <div class="caption p-2 -mt-2">
                <div class="content-caption flex space-x-1">
                  <div class="content-text break-words">
                    <a href=""><span class="text-black-900 font-bold mr-1" id="username">${feed.username}
                    </span></a>
                    <p class="contents" id="caption">${feed.caption}</p>
                  </div>
                </div>
              </div>
  
              <div class="date p-2 -mt-2 text-gray-500 text-md">
                <a href="" class="m-auto"><span id="date">${days} days ago</span></a>
              </div>
  
              <div class="comment p-2 border-t">
                <div class="flex justify-between items-center">
                  <div class="com-left flex space-x-2 flex-row">
                    <a class="" href="">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                        />
                      </svg>
                    </a>
                    <input type="text" class="w-full rounded text-gray-500 border-0" placeholder="Add a comment..." />
                  </div>
  
                  <div class="ic-right mr-3">
                    <a href="" class="font-semibold text-blue-300"><span>Post</span></a>
                  </div>
                </div>
              </div>
            </div> `;
});

feedsContainer.innerHTML = allFeeds;
