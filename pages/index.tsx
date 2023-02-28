import Head from "next/head";
import { ReactNode, useState } from "react";
import { Card } from "../src/components/Card/Card";
import { Switcher } from "../src/components/Switcher/Switcher";
import { Form } from "../src/Form";
import styles from "../styles/Home.module.css";

const formSteps = [1,2,3,4] as const;
type FormStep = typeof formSteps[number]
type FormState = 
  {
    formStep: 1 ,
    formProps: {
      title: string,
      description: string,
      component: ReactNode
    }
  }


const state: FormState = {
  formStep: 1,
  formProps: {
    title: 'Personal info',
    description: 'Please provide your name, email address and phone number',
    component: <Form />
  }
}

export default function Home() {

  const [formState, setFormState] = useState<FormStep>(1)



  
  return (
    <div className={styles.container}>
      <Head>
        <title> FM Multistep from</title>
      </Head>

      <main className={styles.main}>
        components:
        <Switcher />
        {state.formStep === 1 && 
          <Card 
            title={state.formProps.title} 
            description={state.formProps.description}
            >
              {state.formProps.component}
            </Card>
            
        }
      </main>

      <footer className={styles.footer}>
        <a href="https://next.new" target="_blank" rel="noopener noreferrer">
          Created with&nbsp;
          <b>next.new</b>
          &nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
