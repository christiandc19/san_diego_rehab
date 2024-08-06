import React from 'react'

import '../MH-Stylesheet/MentalHealthSection.css'

const DepressionSection = () => {
  return (
    <>
      <div className='mentalHealthSection container'>
        <div className='mentalHealthSectionContent'>

          <div className='mentalHealthSectionHeader'>
          <h1>Symptoms</h1>
          <p>Recognizing the Signs:</p>
              <ul>
                <li>Persistent Sadness: Constant feelings of sadness or emptiness.
                </li>
                <li>Loss of Interest: Diminished interest or pleasure in most activities.
                </li>
                <li>Sleep Disturbances: Insomnia or excessive sleeping.
                </li>
                <li>Appetite Changes: Significant weight loss or gain unrelated to dieting.
                </li>
                <li>Fatigue: Persistent tiredness or lack of energy.
                </li>
                <li>Difficulty Concentrating: Trouble thinking, concentrating, or making decisions.
                </li>
                <li>Feelings of Worthlessness: Excessive guilt or feelings of worthlessness.
                </li>
                <li>Physical Ailments: Unexplained aches or pains.
                </li>
              </ul>
          </div>

          <div className='mentalHealthSectionFlex'>
            <div className='mentalHealthSectionText'>
              <h1>Causes</h1>
              <p>What Triggers Depression:</p>
              <ul>
                <li>Biological Factors: Genetics and chemical imbalances in the brain.
                </li>
                <li>Environmental Factors: Exposure to violence, neglect, abuse, or poverty.
                </li>
                <li>Withdrawal Symptoms: Experiencing anxiety, restlessness, and insomnia when not taking the drug.
                </li>
                <li>Psychological Factors: Personality traits such as low self-esteem or being overly dependent.
                </li>
                <li>Life Events: Stressful life events like loss of a loved one, divorce, or job loss.
                </li>
              </ul>

              <h1>Types</h1>
              <p>Different Forms of Depression:</p>
              <ul>
                <li>Major Depressive Disorder: Severe symptoms that interfere with daily life.</li>
                <li>Persistent Depressive Disorder: A chronic form of depression lasting for at least two years.
                </li>
                <li>Bipolar Disorder: Characterized by mood swings from extreme highs (mania) to lows (depression).</li>
                <li>Postpartum Depression: Depression occurring after childbirth.
                </li>
                <li>Seasonal Affective Disorder (SAD): Depression related to changes in seasons, typically starting in the fall and winter.
                </li>
              </ul>

            </div>

            <div className='mentalHealthSectionImage'>
            <img src='https://rodeo-recovery-substance-abuse.s3.us-west-1.amazonaws.com/xanax.jpg' alt="activities" />

            </div>
    </div>

    <div className='mentalHealthSectionFooter'>
              <h1>Treatment
              </h1>
              <p>Effective Ways to Manage Depression:</p>
              <ul>
                <li>Medication: Antidepressants can help balance chemicals in the brain.
                </li>
                <li>Psychotherapy: Talking therapies like cognitive-behavioral therapy (CBT) or interpersonal therapy (IPT).
                </li>
                <li>Lifestyle Changes: Regular exercise, a healthy diet, and adequate sleep.
                </li>
                <li>Support Groups: Sharing experiences and coping strategies with others.
                .</li>
                <li>Alternative Therapies: Mindfulness, meditation, and acupuncture.
                </li>
              </ul>


              <h1>Seeking Help</h1>
              <p>When to Seek Professional Help: If you or someone you know is experiencing symptoms of depression that interfere with daily life, it’s important to seek help from a healthcare provider. Early intervention can make a significant difference in managing and overcoming depression.</p>

              <h1>Conclusion</h1>
              <p>Depression is a serious but treatable condition. With the right support and treatment, individuals can manage their symptoms and lead fulfilling lives. Remember, you are not alone, and help is available.</p>


          </div>


  </div>

</div>

    </>
  )
}

export default DepressionSection
