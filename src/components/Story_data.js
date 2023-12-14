import stories from './images/bg5.png';
import coins from './images-story/coins.jpg'
import monks from './images-story/monks.jpg'
import bamboo from './images-story/bamboo.jpg'
import buddha from './images-story/buddha.jpg'
import elep from './images-story/elep.jpg'
import rocks from './images-story/rocks.png'
import birds from './images-story/birds.jpg'
import boat from './images-story/boat.jpg'
import butterfly from './images-story/butterfly.jpg'
import farmer from './images-story/farmer.jpg'
import fish from './images-story/fish.jpg'
import jar from './images-story/jar.jpg'
import lotus from './images-story/lotus.jpg'
import mirror from './images-story/mirror.jpg'
import Sculptures from './images-story/Sculptures.jpg'
import seed from './images-story/seed.jpg'
import tea from './images-story/tea.jpg'


const Story_data = [
    {   
        "image": coins,
        "heading": "The Lost Coin",
        "story": "Once, a poor widow lost her only coin. Distraught, she searched everywhere but couldn't find it. A kind monk passing by asked, 'What are you looking for?' She replied, 'I've lost my coin.' The monk smiled, 'Sometimes, we lose things that aren't truly ours. Let go, and you may find something more valuable.'",
        "moral": "Detachment brings true wealth."
    },
    {   
        "image": monks,
        "heading": "The Two Monks",
        "story": "Two monks were walking when they found a lady struggling to cross a muddy puddle. One monk carried her across, while the other remained silent. Later, the silent monk's companion asked, 'Why did you carry her? We're not supposed to touch women.' The monk replied, 'I left her at the puddle; you are still carrying her in your mind.'",
        "moral": "Let go of mental burdens."
    },
    {   
        "image": bamboo,
        "heading": "The Bamboo Forest",
        "story": "A bamboo cutter found a glowing bamboo stalk. Inside, he discovered a radiant child. The child grew into a wise sage, teaching the importance of simplicity and humility. When asked about the bamboo, he said, 'The true treasure lies in the ordinary.'",
        "moral": "True value is found in simplicity."
    },
    {   
        "image": elep,
        "heading": "The Elephant and the Blind Men",
        "story": "Blind men touched different parts of an elephant and described it differently. One felt the trunk and said it's like a snake; another touched the leg and thought it was a tree. The wise elder explained, 'Truth is one, but wise men describe it differently.'",
        "moral": "Seek to understand the whole truth."
    },
    {   
        "image": buddha,
        "heading": "The Mustard Seed",
        "story": "A grieving mother sought Buddha to revive her dead child. Buddha asked her to bring mustard seeds from a house untouched by sorrow. As she searched, she realized every home had experienced loss. She returned wiser, understanding the universality of suffering.",
        "moral": "Suffering is part of the human experience."
    },
    {
        "image": rocks,
        "heading": "The Stonecutter",
        "story": "A discontented stonecutter wished to be more powerful than anyone else. As his wish was granted, he became a mountain. Yet, the sun gradually wore him down. He then wished to be the sun but was soon blocked by a cloud. Learning humility, he wished to be a cloud, providing shade without the need for power.",
        "moral": "True power comes from understanding and humility."
    },
    {
        "image": fish,
        "heading": "The Golden Fish",
        "story": "A fisherman caught a golden fish that spoke, 'Release me, and I'll grant you a wish.' The fisherman released it but chose not to make a wish. Later, facing hardship, he recalled the golden fish. It appeared and said, 'Your compassion was your greatest wish.'",
        "moral": "True power comes from understanding and humility."
    },
    {
        "image": farmer,
        "heading": "The Farmer's Luck",
        "story": "A farmer's horse ran away. The villagers exclaimed, 'What bad luck!' The farmer replied, 'Good or bad, who can say?' The horse returned with wild horses. The villagers said, 'What good luck!' The farmer replied, 'Good or bad, who can say?' His son broke his leg trying to tame a wild horse. Again, the villagers exclaimed, 'What bad luck!' The farmer replied, 'Good or bad, who can say?' Then, a war broke out, and all able-bodied men were conscripted, except the farmer's son.",
        "moral": "The nature of events is often beyond our immediate understanding."
    },
    {
        "image": butterfly,
        "heading": "The Butterfly Dream",
        "story": "Chuang Tzu dreamt he was a butterfly. Upon waking, he wondered, 'Am I a man who dreamt of being a butterfly, or a butterfly dreaming of being a man?' He pondered the fluidity of reality, emphasizing the illusory nature of existence.",
        "moral": "Reality is subjective and ever-changing."
    },
    {
        "image": boat,
        "heading": "The Empty Boat",
        "story": "A boat floated downstream, colliding with the empty boat of an angry man. He shouted at the boat, not realizing it was empty. When he discovered the emptiness, he became calm. The wise master explained, 'Your anger is like the collision. It is with an empty boat.'",
        "moral": "Let go of unnecessary anger and find peace."
    },
    {
        "image": lotus,
        "heading": "The Lotus in the Mud",
        "story": "The lotus flower, though born in muddy water, rises above the surface, untouched by the mud. Similarly, one can rise above life's challenges and difficulties, maintaining inner purity and beauty.",
        "moral": "Embrace challenges and let them be stepping stones to growth."
    },
    {
        "image": birds,
        "heading": "The Wounded Bird",
        "story": "A compassionate monk found a wounded bird and cared for it. When the bird healed, it stayed with the monk, bringing him great joy. One day, the bird flew away. Instead of sorrow, the monk felt gratitude for the moments of shared happiness.",
        "moral": "Cherish the present and let go without attachment."
    },
    {
        "image": seed,
        "heading": "The Seeds of Happiness",
        "story": "A farmer planted two identical seeds in different soils. One grew into a robust plant, while the other struggled. The farmer explained, 'The seed is like the mind. Nurture it with positive thoughts, and happiness will grow.'",
        "moral": "Cultivate a positive mindset for a fulfilling life."
    },
    {
        "image": Sculptures,
        "heading": "The Stone and the Sculptor",
        "story": "A sculptor carved a beautiful statue from a rough stone. When asked how he created such beauty, he replied, 'I simply removed what wasn't needed.' Similarly, we can shape our lives by letting go of negativity and unnecessary burdens.",
        "moral": "Self-improvement often involves letting go."
    },
    {
        "image": tea,
        "heading": "The Teacup Story",
        "story": "A young disciple asked his master, 'How can I find peace?' The master poured tea into the disciple's cup until it overflowed. The disciple exclaimed, 'It's full, it's overflowing!' The master calmly said, 'Like this cup, your mind is full of preconceptions. To find peace, first, empty your mind.'",
        "moral": "Clear your mind to experience true peace."
    },
    {
        "image": jar,
        "heading": "The Empty Jar",
        "story": "A teacher filled a jar with large rocks, asking if it was full. The students agreed. Then, the teacher added pebbles, filling the gaps. Again, he asked if it was full. Finally, he poured sand, filling every space. The lesson: prioritize the essential things in life.",
        "moral": "Prioritize what truly matters."
    },
    {
        "image": bamboo,
        "heading": "The Bamboo Raft",
        "story": "A man crossing a turbulent river built a bamboo raft. Once across, he carried the raft on his back, fearing he might need it again. The wise monk said, 'The raft served its purpose. Carrying it now only burdens your journey.'",
        "moral": "Learn to let go of what has served its purpose."
    },
    {
        "image": butterfly,
        "heading": "The Butterfly's Struggle",
        "story": "A man watched a struggling butterfly trying to emerge from its cocoon. Feeling pity, he helped it by cutting the cocoon. To his surprise, the butterfly couldn't fly properly. The struggle was necessary for its wings to strengthen.",
        "moral": "Challenges strengthen us; embrace them."
    },
    {
        "image": bamboo,
        "heading": "The Bamboo and the Wind",
        "story": "The bamboo bends gracefully in the wind but never breaks. Similarly, in the face of life's challenges, one can adapt and remain resilient without losing inner strength.",
        "moral": "Flexibility and resilience are keys to enduring challenges."
    },
    {
        "image": mirror,
        "heading": "The Mirror",
        "story": "A wise teacher gave a mirror to a student and said, 'This mirror reflects the truth. Look into it and see yourself without illusions.' The student realized that true self-awareness involves acknowledging both strengths and flaws.",
        "moral": "True growth comes from honest self-reflection."
    }
];

function generateRandomNumbers() {
    const randomNumbers = [];

    while (randomNumbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * 20);

        if (!randomNumbers.includes(randomNumber)) {
            randomNumbers.push(randomNumber);
        }
    }

    return randomNumbers;
}

const result = generateRandomNumbers();
console.log(result);

const myStoryData = [Story_data[result[0]],Story_data[result[1]],Story_data[result[2]]];

export default myStoryData;
