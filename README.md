# One Line, One Chill

[![make.fun](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![rank](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/gp897318-beep/g290-one-chill/rank.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
[![reward](https://make.fun/badge/u-azazex-one-line-one-chill-6d4d5488/gp897318-beep/g290-one-chill/reward.svg)](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)

A single sentence of horror, under 200 characters, written to frighten a
reader in one breath — an entry for the
[One Line, One Chill](https://make.fun/bounty/u-azazex-one-line-one-chill-6d4d5488)
bounty on [make.fun](https://make.fun).

## The line

> The dentist found a second row of teeth growing behind mine, and they were already chewing.

91 characters, one sentence. Chosen from eight candidates against the
judge's brief: it reads as a one-sentence horror story, earns its scare
instead of announcing it, gives a concrete image a reader can see, avoids
every stock image (no mirror, no doll, no basement), and lands its last
word — *chewing* — while withholding what is being chewed, so the dread
outlasts the line.

## How it works

`main.ts` writes the line to `/output/entry.txt` (no trailing newline, so
the file is exactly the 91 characters). Before writing it self-checks the
competition gate: 1–200 characters, a single line, not only white space.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
