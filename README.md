<div align="center">
  <img src="https://i.imgur.com/P98NzkK.png"><br>
  <b>Node.js wrapper for the <a href="https://steamladder.com/">Steam Ladder</a> API</b>
  <br><br>
  <p>
    <a href="https://netlify.com/"><img src="https://i.imgur.com/oJjg6fA.png" alt="Documentation deployed by Netlify" width="128" height="24"></a>
    <br>
        <a href="https://discord.gg/PwWJRsc" target="_blank"><img src="https://img.shields.io/discord/445203868624748555?color=blue&logo=discord&logoColor=white" alt="Discord Server"/></a>
        <a href="https://github.com/SwitchbladeBot/switchblade/actions?query=workflow%3ACI" target="_blank"><img src="https://github.com/SwitchbladeBot/steamladder.js/workflows/CI/badge.svg" alt="CI Testing"/></a>
        <a href="https://github.com/SwitchbladeBot/steamladder.js/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/SwitchbladeBot/steamladder.js.svg" alt="License"/></a>
        <a href="https://opencollective.com/switchblade#backer" target="_blank"><img src="https://opencollective.com/switchblade/tiers/backer/badge.svg?label=backers&color=brightgreen" alt="Backers"/></a>
        <a href="https://opencollective.com/switchblade#sponsor" target="_blank"><img src="https://opencollective.com/switchblade/tiers/sponsor/badge.svg?label=sponsors&color=brightgreen" alt="Sponsors"/></a>
        <a href="https://github.com/SwitchbladeBot/steamladder.js/issues?q=is%3Aopen+is%3Aissue+label%3Ahacktoberfest" target="_blank"><img src="https://img.shields.io/static/v1?label=hacktoberfest&message=friendly&color=success" alt="Hacktoberfest"/></a>
    <a href="https://npmjs.com/package/steamladder"><img src="https://img.shields.io/npm/v/steamladder.svg"/></a>
  </p>
  <a href="http://steamladder.switchblade.xyz/">Read the documentation</a>
</div>

## Installing

```bash
$ npm install steamladder
```

## Getting an API key
Login into [SteamLadder](https://steamladder.com) using your Steam account and head over to https://steamladder.com/user/settings/api to get your API key.

## Usage
First, initialize the client using your `STEAMLADDER_API_KEY`.

```js
const { SteamLadderAPI } = require('steamladder')

const steamladder = new SteamLadderAPI('STEAMLADDER_API_KEY')
```

Now you can use the `steamladder` methods.

### Getting a profile
```js
steamladder.getProfile('steamid64').then((data) => console.log(data)) // Profile data
```

### Getting a ladder
```js
const { LadderType, Region } = require('steamladder')

steamladder.getLadder(LadderType.XP).then((data) => console.log(data)) // Using LadderType
steamladder.getLadder('xp').then((data) => console.log(data)) // Using string

steamladder.getLadder('xp', Region.SOUTH_AMERICA).then((data) => console.log(data)) // Using region
steamladder.getLadder('xp', 'south_america').then((data) => console.log(data)) // Using region string
steamladder.getLadder('xp', 'BR').then((data) => console.log(data)) // Using ISO 3166-1 alpha-2 country code
```

## Backers

Backers are the people who contribute to our projects monetarily. They get their image with a link to their website on this page, an awesome badge on their Switchblade profile and a role that grants exclusive access to some channels in our discord server. [Click here and become a backer today!][backers-url]

<a href="https://opencollective.com/switchblade/backer/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/4/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/5/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/5/avatar.svg?requireActive=false&a=1"></a>
<a href="https://opencollective.com/switchblade/backer/6/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/7/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/8/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/9/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/backer/10/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/backer/10/avatar.svg?requireActive=false"></a>

## Sponsors

Sponsors are organizations and companies that contribute to our projects with money. They get their logo with a link to their website on this page! [Click here and become a sponsor today!][sponsors-url]

<a href="https://opencollective.com/switchblade/sponsor/0/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/0/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/1/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/1/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/2/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/2/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/3/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/3/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/4/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/4/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/5/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/5/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/6/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/6/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/7/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/7/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/8/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/8/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/9/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/9/avatar.svg?requireActive=false"></a>
<a href="https://opencollective.com/switchblade/sponsor/10/website?requireActive=false" target="_blank"><img src="https://opencollective.com/switchblade/sponsor/10/avatar.svg?requireActive=false"></a>

[backers-url]: https://opencollective.com/switchblade#backer
[backers-badge]: https://opencollective.com/switchblade/tiers/backer/badge.svg?label=backers&color=brightgreen

[sponsors-url]: https://opencollective.com/switchblade#sponsor
[sponsors-badge]: https://opencollective.com/switchblade/tiers/sponsor/badge.svg?label=sponsors&color=brightgreen
