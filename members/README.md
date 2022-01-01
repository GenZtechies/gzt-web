# GenZtechies ⚡️️🚀

## _"Connecting Teen Techies Across Nigeria"_

A community for teen techies place across Nigeria!! 😍

# How to get added to the Members Page 🤗

## _Setup 🛠_

- Note: **You will first need to make a fork of the project!**
  ![fork image](https://help.github.com/assets/images/help/repository/fork_button.jpg)
- `git clone https://github.com/YOUR_GITHUB_USERNAME/gzt-web.git`
- `yarn install` or `npm install`
- `yarn dev` or `npm dev`

## _Getting Added 🫂_

To add your name to the list, create a file `<YOUR_GH_USERNAME>.json`
inside `members/` folder, and then fill it up with following content.

```json
{
  "full_name": "YOUR_FULL_NAME",
  "username": "YOUR_USERNAME",
  "image_url": "YOUR_IMG_URL",
  "short_description": "YOUR_SHORT_DESCRIPTION",
  "role": "YOUR_ROLE",
  "links": {
    "website_or_extra": "YOUR_WEBSITE_URL",
    "github": "https://github.com/YOUR_GH_USERNAME",
    "twitter": "https://www.twitter.com/YOUR_TWITTER_HANDLE",
    "linkedin": "https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME"
  },
  "location": {
    "state": "YOUR_STATE_OR_PROVINCE",
    "country": "YOUR_COUNTRY"
  },
  "isActive": true
}
```

- Run: `yarn run members-update`
- Commit changes and push

## _Please Note!! 🚨_

- Profile picture/image links are only allowed. (**PNG, JPG**)
- Your pull request will only be accepted if it follows the example above. It **cannot** have anything else.

- To use Github avatars as your profile image. <br/>
  -. Go to your profile on GitHub.com <br/>
  -. Append to your GitHub profile url “.png”, so it will look like this: <br/>
  -. https://github.com/eni4sure.png <br/>
  -. Hit enter and the browser will redirect to a page with your image, it'll look like this: <br/>
  https://avatars.githubusercontent.com/u/52782730?v=<br/>
  -. Copy the URL of this page and paste it in the "image_url" section for your profile -`{ ..., "image_url" : "YOUR_IMG_URL", ...}`
