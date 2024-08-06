import React from 'react'
import DepressedMan from '../../assets/kratom_section_1.webp'


const KratomSection = () => {
  return (
    <>
      <div className='addictionSection container'>
        <div className='addictionSectionContent'>

          <div className='addictionSectionHeader'>
          <h1>How Kratom Works</h1>
              <p>Kratom contains two primary active alkaloids, mitragynine and 7-hydroxymitragynine. These compounds interact with opioid receptors in the brain, producing effects similar to both stimulants and opioids. At lower doses, kratom acts as a stimulant, increasing energy and alertness. At higher doses, it has sedative effects, alleviating pain and inducing euphoria.</p>
              <h1>Signs and Symptoms of Kratom Addiction</h1>
              <p>While kratom is marketed as a natural remedy, it has the potential for addiction and dependency. Signs of kratom addiction include:</p>
              <ul>
                <li>Physical Symptoms: Weight loss, muscle aches, nausea, sweating, and constipation.</li>
                <li>Psychological Symptoms: Anxiety, irritability, mood swings, and depression.</li>
                <li>Behavioral Symptoms: Increased consumption, inability to control use, neglecting responsibilities, and social withdrawal.</li>
              </ul>
          </div>

          <div className='addictionSectionFlex'>
            <div className='addictionSectionText'>
              <h1>Risks and Health Effects</h1>
              <p>Chronic use of kratom can lead to serious health issues, including:</p>
              <ul>
                <li>Liver Damage: Prolonged use may cause liver toxicity, leading to jaundice and other liver-related problems.</li>
                <li>Cardiovascular Issues: Increased heart rate and blood pressure can result from excessive use.</li>
                <li>Mental Health Concerns: Long-term use can exacerbate mental health disorders such as anxiety and depression.</li>             
              </ul>
              <h1>Kratom Withdrawal</h1>
              <p>Individuals who become dependent on kratom may experience withdrawal symptoms similar to those of opioids. Common withdrawal symptoms include:</p>
              <ul>
                <li>Muscle aches and pains</li>
                <li>Insomnia</li>
                <li>Irritability and agitation</li>
                <li>Nausea and vomiting</li>
                <li>Diarrhea</li>
              </ul>

            </div>

            <div className='addictionSectionImage'>
            <img src={DepressedMan} alt="activities" loading='lazy'/>

            </div>
    </div>

    <div className='addictionSectionFooter'>
          <h1>Treatment for Kratom Addiction</h1>
              <p>Effective treatment for kratom addiction often involves a combination of medical and behavioral interventions:</p>
              <ul>
                <li>Detoxification: Medical supervision is recommended to manage withdrawal symptoms safely.</li>
                <li>Behavioral Therapy: Cognitive-behavioral therapy (CBT) and other forms of counseling can help address underlying issues and develop coping strategies.</li>
                <li>Support Groups: Participation in groups such as Narcotics Anonymous (NA) can provide peer support and encouragement.</li>
              </ul>

              <h1>Conclusion</h1>
              <p>Kratom addiction is a growing concern due to its easy accessibility and perceived safety. Understanding the risks and symptoms of kratom use is crucial for early intervention and effective treatment. If you or someone you know is struggling with kratom addiction, seeking professional help is a vital step toward recovery.</p>


          </div>


  </div>

</div>

    </>
  )
}

export default KratomSection
