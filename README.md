# Shavian Transliteration

This project is a program that performs a transliteration on the Shavian alphabet, which is an alternate orthography for the English language. I have wanted to make this project before mainly because I have been in Shavian communities for a while, and I am still illiterate. I wanted to create some sort of API so that if I ever wanted to automate transliteration, it would be easier for me in the future.

The program idea was better in theory than it was in practice -- the freely-available model I used wasn't necessarily as powerful as I had hoped, even though it was free, so I shouldn't've expected much anyways. The program works well enough though.

**Important**: *Try not to input too much text, otherwise the AI model might fail to fully process everything. It's a bit jank, but it works well enough for me.*

## How to Use UI

To use the frontend UI, enter the Shavian text into the input textbox and then press "Convert to Latin". Then, the program will perform the transliteration. Because it uses an AI model, it takes a bit longer than I would've hoped, but it gets the job done. The output is then placed below the button.

## How to Use API

The API is quite simple. Send a `POST` request to `https://spentine.com/shawTl/api/s2l` with the body set to a JSON containing your Shavian text in the format:

```json
{ "text": "[insert shavian here]" }
```

Then, after a few seconds, you should receive your Latin text returned in the format:

```json
{ "text": "[returned latin text]", "rl": "[intermediate format]" }
```

The *intermediate format* is a format that is cleaned up automatically without the use of AI, which means that it's more reliable in terms of content but less polished.

## Sample Text

> *Taken from Shavian Discord Rules*
>
> **𐑞𐑦𐑕 𐑜𐑴𐑟 𐑢𐑦𐑞𐑬𐑑 𐑕𐑱𐑦𐑙, 𐑚𐑳𐑑 𐑞𐑦𐑕 𐑦𐑟 𐑐𐑮𐑲𐑥𐑧𐑮𐑩𐑤𐑦 𐑩 𐑐𐑤𐑱𐑕 𐑓 𐑐𐑰𐑐𐑩𐑤 𐑑 𐑛𐑦𐑕𐑒𐑳𐑕 𐑞 𐑿𐑕 𐑝 𐑞 ·𐑖𐑱𐑝𐑾𐑯 𐑨𐑤𐑓𐑩𐑚𐑧𐑑. 𐑩𐑑𐑨𐑒𐑕 𐑪𐑯 𐑳𐑞𐑼 𐑐𐑻𐑕𐑩𐑯𐑟 𐑓 𐑞𐑺 𐑚𐑦𐑤𐑰𐑓𐑕, 𐑐𐑩𐑤𐑦𐑑𐑦𐑒𐑩𐑤 𐑒𐑩𐑯𐑝𐑦𐑒𐑖𐑩𐑯𐑟, 𐑐𐑻𐑕𐑩𐑯𐑨𐑤𐑦𐑑𐑦 𐑹 𐑳𐑞𐑼𐑢𐑲𐑟 𐑸 𐑯𐑪𐑑 𐑢𐑧𐑤𐑒𐑩𐑥. 𐑞𐑦𐑕 𐑛𐑳𐑟 𐑯𐑪𐑑 𐑥𐑰𐑯 𐑿 𐑒𐑨𐑯𐑪𐑑 𐑛𐑦𐑕𐑩𐑜𐑮𐑰, 𐑚𐑳𐑑 𐑤𐑰𐑝 𐑬𐑑 𐑝 𐑘𐑹 𐑛𐑦𐑕𐑩𐑜𐑮𐑰𐑥𐑩𐑯𐑑𐑕 𐑧𐑯𐑦 𐑦𐑯𐑕𐑳𐑤𐑑𐑕, 𐑐𐑻𐑕𐑩𐑯𐑩𐑤 𐑩𐑑𐑨𐑒𐑕 𐑹 𐑒𐑪𐑯𐑛𐑦𐑕𐑧𐑯𐑛𐑦𐑙 𐑮𐑦𐑥𐑸𐑒𐑕 𐑪𐑯 𐑩 𐑜𐑮𐑵𐑐 𐑝 𐑐𐑰𐑐𐑩𐑤, 𐑢𐑧𐑞𐑼 𐑹 𐑯𐑪𐑑 𐑐𐑰𐑐𐑩𐑤 𐑝 𐑞𐑦𐑕 𐑜𐑮𐑵𐑐 𐑸 𐑐𐑮𐑧𐑟𐑩𐑯𐑑 𐑦𐑯 𐑞 𐑕𐑻𐑝𐑼.**
>
> *"This goes without saying, but this is primarily a place for people to discuss the use of the Shavian alphabet. Attacks on other persons for their beliefs, political convictions, personality or otherwise are not welcome. This does not mean you cannot disagree, but leave out of your disagreements any insults, personal attacks or condescending remarks on a group of people, whether or not people of this group are present in the server."*

> *Taken from Shavian Discord Rules*
>
> **𐑿𐑟𐑼𐑟 𐑥𐑱 𐑗𐑵𐑟 𐑑 𐑖𐑺 𐑔𐑦𐑙𐑟 𐑦𐑯 𐑞𐑦𐑕 𐑕𐑻𐑝𐑼 – 𐑸𐑑, 𐑓𐑩𐑑𐑪𐑜𐑮𐑩𐑓𐑦, 𐑹 𐑕𐑦𐑥𐑐𐑤𐑦 𐑒𐑪𐑯𐑝𐑼𐑕𐑱𐑖𐑩𐑯. 𐑧𐑯𐑦𐑔𐑦𐑙 𐑞𐑨𐑑 𐑦𐑟 𐑐𐑴𐑕𐑑𐑩𐑛 𐑣𐑽 𐑖𐑫𐑛 𐑯𐑪𐑑 𐑚𐑰 𐑐𐑴𐑕𐑑𐑩𐑛 𐑪𐑯 𐑩𐑯𐑳𐑞𐑼 𐑐𐑳𐑚𐑤𐑦𐑒 𐑓𐑹𐑩𐑥 𐑢𐑦𐑞𐑬𐑑 𐑐𐑼𐑥𐑦𐑖𐑩𐑯 𐑝 𐑷𐑤 𐑦𐑯𐑝𐑪𐑤𐑝𐑛. 𐑦𐑓 𐑦𐑑𐑕 𐑕𐑳𐑥𐑔𐑦𐑙 𐑣𐑸𐑥𐑤𐑩𐑕, (𐑢𐑳𐑯𐑕 𐑩𐑜𐑱𐑯 – 𐑨𐑑 𐑥𐑪𐑛𐑼𐑱𐑑𐑼 𐑛𐑦𐑕𐑒𐑮𐑧𐑖𐑩𐑯), 𐑞𐑦𐑕 𐑢𐑦𐑤 𐑯𐑪𐑑 𐑚𐑰 𐑦𐑯𐑓𐑹𐑕𐑑 – 𐑓 𐑦𐑜𐑟𐑨𐑥𐑐𐑩𐑤, 𐑦𐑓 𐑿 𐑢𐑪𐑯𐑑 𐑑 𐑖𐑴 𐑘𐑹 𐑓𐑮𐑧𐑯𐑛𐑟 𐑢𐑪𐑑 𐑖𐑱𐑝𐑾𐑯 𐑤𐑫𐑒𐑕 𐑤𐑲𐑒, 𐑯 𐑿 𐑑𐑱𐑒 𐑩 𐑕𐑒𐑮𐑰𐑯𐑖𐑪𐑑 𐑝 𐑤𐑦𐑙𐑜𐑢𐑦𐑕𐑑𐑦𐑒 𐑖𐑦𐑑𐑐𐑴𐑕𐑑𐑦𐑙, 𐑦𐑑𐑕 𐑢𐑧𐑤𐑒𐑩𐑥; 𐑣𐑬𐑧𐑝𐑼, 𐑦𐑓 𐑿 𐑢𐑪𐑯𐑑 𐑑 𐑖𐑺 𐑦𐑯 𐑩 𐑐𐑳𐑚𐑤𐑦𐑒 𐑕𐑐𐑱𐑕 𐑕𐑳𐑥𐑔𐑦𐑙 𐑿 𐑛𐑦𐑛𐑩𐑯𐑑 𐑥𐑱𐑒, 𐑹 𐑞 𐑑𐑪𐑐𐑦𐑒 𐑝 𐑒𐑪𐑯𐑝𐑼𐑕𐑱𐑖𐑩𐑯 𐑦𐑟 𐑥𐑹 𐑐𐑻𐑕𐑩𐑯𐑩𐑤, 𐑐𐑤𐑰𐑟 𐑢𐑱𐑑 𐑑𐑦𐑤 𐑿 𐑣𐑨𐑝 𐑐𐑼𐑥𐑦𐑖𐑩𐑯 𐑓𐑮𐑪𐑥 𐑷𐑤 𐑦𐑯𐑝𐑪𐑤𐑝𐑛.**
>
> *"Users may choose to share things in this server – art, photography, or simply conversation. Anything that is posted here should not be posted on another public forum without permission of all involved. If it's something harmless, (once again – at moderator discretion), this will not be enforced – for example, if you want to show your friends what shavian looks like, and you take a screenshot of linguistic shitposting, it's welcome; however, if you want to share in a public space something you didn't make, or the topic of conversation is more personal, please wait til you have permission from all involved."*

> *Taken from Shavian Discord Chat*
>
> **𐑲 𐑢𐑫𐑛 𐑤𐑲𐑒 𐑑 𐑦𐑖𐑵 𐑨𐑯 𐑩𐑐𐑪𐑤𐑩𐑡𐑦, 𐑚𐑳𐑑 𐑲 𐑷𐑤𐑕𐑴 𐑐𐑮𐑵𐑝𐑛 𐑑 𐑥𐑲𐑕𐑧𐑤𐑓 𐑲 𐑒𐑨𐑯 𐑮𐑲𐑑 𐑦𐑯 𐑖𐑱𐑝𐑾𐑯 𐑢𐑲𐑤 𐑛𐑮𐑳𐑙𐑒**
>
> *"I would like to issue an apology, but I also proved to myself I can write in Shavian while drunk"*

> *Taken from Shavian Discord Chat*
>
> **𐑲 𐑒𐑼𐑧𐑯𐑑𐑤𐑦 𐑴𐑯 𐑩 ⸰𐑛𐑕 𐑲 𐑜𐑪𐑑 𐑨𐑑 𐑕𐑩𐑥 𐑮𐑧𐑑𐑮𐑴 𐑜𐑱𐑥𐑦𐑙 𐑔𐑱𐑙 𐑓𐑹 𐑤𐑲𐑒 $50 𐑚𐑨𐑒 𐑦𐑯 𐑛𐑧𐑕𐑧𐑥𐑚𐑼. 𐑞 𐑐𐑦𐑒𐑑𐑴𐑗𐑨𐑑 𐑨𐑐 𐑦𐑟 𐑯𐑲𐑕 𐑑 𐑥𐑧𐑕 𐑩𐑮𐑬𐑯𐑛 𐑢𐑦𐑔 𐑰𐑝𐑦𐑯 𐑨𐑟 𐑩 𐑒𐑩𐑥𐑐𐑤𐑰𐑑 𐑤𐑴𐑯𐑼 𐑣𐑵 𐑣𐑨𐑟 𐑯𐑴 𐑓𐑮𐑧𐑯𐑟 𐑑 𐑨𐑗𐑩𐑤𐑦 𐑐𐑦𐑒𐑑𐑴𐑗𐑨𐑑 𐑢𐑦𐑔**
>
> *"I currently own a DS I got at some retro gaming thing for like $50 back in December. The Pictochat app is nice to mess around with Evine as a complete loner who has no friends to actually Pictochat with."*