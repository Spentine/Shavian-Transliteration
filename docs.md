# Transliterator

The transliterator should preferrably use a smart server.

# Shavian to Latin

This portion will convert Shavian to Latin. A server will handle the conversions, while the frontend is for interacting with the server.

## Pipeline

To convert from Shavian to Latin, it should perform the following steps:

1. Use the ReadLex to detemine what words can be easily transliterated accurately. If there is ambiguity, the word will be in a format (a/b/c/...) so that the words are known.
2. Convert all other letters into its corresponding IPA. There is of course, still some fuzziness with the conversion because of the miscellaneous rules that come along with Shavian.
3. Use a Large Language Model (I know, corny) to produce a final text that uses the non-Shavian information to create the final text.