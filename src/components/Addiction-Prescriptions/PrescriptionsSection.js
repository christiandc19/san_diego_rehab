import React from 'react'

const PrescriptionsSection = () => {
  return (
    <>
      <div className='addictionSection container'>
        <div className='addictionSectionContent'>
          <div className='addictionSectionHeader'>
          <h1>Types of Commonly Abused Prescription Drugs</h1>
              <p>Opioids:</p>
              <ul>
                <li>Examples: Oxycodone, Hydrocodone, Morphine, Fentanyl</li>
                <li>Uses: Pain relief</li>
                <li>Risks: High potential for addiction, respiratory depression, overdose</li>
              </ul>

              <p>Central Nervous System (CNS) Depressants:</p>
              <ul>
                <li>Examples: Benzodiazepines (Valium, Xanax), Sleep Medications (Ambien)</li>
                <li>Uses: Anxiety, sleep disorders</li>
                <li>Risks: Dependence, withdrawal symptoms, cognitive impairment</li>
              </ul>

              <p>Stimulants:</p>
              <ul>
                <li>Examples: Adderall, Ritalin</li>
                <li>Uses: ADHD, narcolepsy</li>
                <li>Risks: Increased heart rate, high blood pressure, addiction</li>
              </ul>
          </div>

          <div className='addictionSectionFlex'>

          <div className='addictionSectionImage'>
            <img src='https://sunset-rehab.s3.us-west-1.amazonaws.com/alcohol-addiction.jpg' alt="activities" />
            </div>

            <div className='addictionSectionText'>
              <h1>Signs and Symptoms of Prescription Addiction</h1>
              <p>Physical Symptoms:</p>
              <ul>
                <li>Drowsiness or sedation</li>
                <li>Slurred speech</li>
                <li>Poor coordination</li>
                <li>Changes in appetite or weight</li>
              </ul>

              <h1>Behavioral Symptoms:</h1>
              <ul>
                <li>Increased use of medication beyond prescribed amounts</li>
                <li>Doctor shopping to obtain multiple prescriptions</li>
                <li>Social withdrawal and neglect of responsibilities</li>
                <li>Engaging in risky behaviors</li>
              </ul>

              <h1>Psychological Symptoms:</h1>
              <ul>
                <li>Anxiety or paranoia</li>
                <li>Mood swings or irritability</li>
                <li>Depression</li>
                <li>Cognitive impairment</li>
              </ul>

            </div>

    </div>

    <div className='addictionSectionFooter'>
              <h1>Conclusion</h1>
              <p>Prescription addiction is a serious and growing problem that affects individuals, families, and communities. Understanding the risks, signs, and treatment options is crucial in addressing this issue. By promoting responsible prescribing, patient education, and comprehensive treatment approaches, we can help prevent and combat prescription addiction.</p>


          </div>


  </div>

</div>

    </>
  )
}

export default PrescriptionsSection
