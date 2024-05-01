import './App.css'
import { TwiterCardFollowe } from './TwiterCardFollowe'
export function App () {

    return (
    <section className='App'>
       <TwiterCardFollowe   userName='@Bismar' initialIsFollowing = {true}>
        BismarHenriquez
        </TwiterCardFollowe>

       <TwiterCardFollowe userName='@Angel' >
        Angel Henriquez
       </TwiterCardFollowe>
       


      
    </section>
    )
}
