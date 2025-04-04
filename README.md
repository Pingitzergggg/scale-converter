# [ScaleConvert Website](https://scaleconvert.netlify.app)

Scale Converter is a free, open-source website made with the goal of simplifying music production for everyone! Provide your scale tonics and a degree or note progression of your choice and let the site handle the rest!

### The reason of creation

In my carrer as a musician, I've noticed that the majority of people who play instruments and write songs just for the fun, doesn't know much about music theory. Stuff like scales and modes can be really confusing when you try to convert a progession. This is where `ScaleConvert` comes in the picture.

### What does ScaleConvert do?

- It generates the scales from only the tonic
- It can switch modes with just one click
- It is able the convert musical progressions and define the type of the chords(major, minor, diminished, etc...)

### Example

<strong>Disclaimer: </strong>This site uses the `Kodaly-System`! In the sense of ABC notes, this means that the B note in the US System is called `H` here and the Ab note is called `B`!

<strong>1.</strong>Let's say you want to know the notes of the C Major scale:

> All you have to do is to type `c` into the "_original tonic_" or "_modified tonic_". <br>
> Now you can either press the `Convert` button or just choose a different mode from the selector labeled "_Ionian_". This is the default value for the selectors.<br> > _<strong>Hint: </strong> Ionian stands for "Major" and Aeolian stands for "Minor" scales!_

Now you will see your full C Major scale in the "_Original Scale_" input.

    Output:
        Original Tonic: "C"
        Original Tonic Selector: "Ionian"
        Original Scale: "C-D-E-F-G-A-H"

<strong>2.</strong>Providing a chord progression to convert:

The real power of ScaleConvert shows when you use it for actual conversions. For this, you need to provide the two scale tonics the way it's described in the first example. Now you can either choose to provide a progression of notes. For this you need to be aware of the notes of the original scale. If you do not want to know any of the notes of any scale you can just simply add the progression in degrees like: "1-5-4-3".

> For this, you need to provide the two scale tonics as showns before.<br>
> After this, you need to decide which way you want to give your progression: `Degree` or `Note`. You can switch between these two otions by clicking the arrow button on the left of the input field.<br>
> Now you need to provide the progression. Do this with separating each value with a "-" character, otherwise the input will show a `Sytnax Error`.<br>
> After providing everything, click the `Convert` button and the program will convert you progression.

    Output:
        Original Tonic: "C"
        Original Tonic Selector: "Ionian"
        Original Scale: "C-D-E-F-G-A-H"

        New Tonic: "D"
        New Tonic Selector: "Dorian"
        New Scale: "D-E-F-G-A-H-C"

        Original Progression: "C-Dm-F-Em"
        Original Progression(sus version): "Csus4-Dsus4-Fsus2-Esus2"
        New Progression: "Dm-Em-G-F"
        New Progression(sus version): "Dsus4-Esus2-Gsus4-Fsus2"
        Degree: "I-II-IV-III"

Now, you can see that there are two versions of your old and new progressions: `Normal` and `Sus` versions. The `Normal` ones show the original types of the chords in the scale(major, minor or diminished). And the `Sus` ones show the chord's sustained version that is compatible with the provided key.<br>
_<strong>Hint:</strong>_ Every sus4 chord is also compatible with it's root's sus2 chord. Every chord that the software shows as sus4 compatible is also compatible with sus2!

### Buy me a Coffee!

Since the site is `open-source`, there is no way for me to profit from it, which wasn't my goal with it in the first place. However if you like my work, you could donate on my [PayPal](https://paypal.me/Pingitzergggg) to support me. I'm planning to do similar useful projects in the future.

_This is the original documentation of ScaleConvert. For the graphical tutorial press the `Help` button on the website_

[Licence](./LICENCE.md)
