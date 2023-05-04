import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom'
import { Container, Row, Col } from 'reactstrap';

const pets1 = [
    {
        id: 'a',
        firstname: 'Robin',
        url: 'https://www.vets4pets.com/siteassets/species/cat/close-up-of-cat-looking-up.jpg?w=585&scale=down',
        type:'cat',
        des:'Helloooo my name is Robin. I was rescued from a colony with my siblings the summer of 2015 and had a good home but my brother Junior and I had to be re homed due to severe allergies. We are mature adult kitties who love to play and chill with our human. ',
      },
      {
        id: 'b',
        firstname: 'Dave',
        url: 'https://www.loveyourdog.com/wp-content/uploads/2019/05/Best-Crates-For-Golden-Retrievers-900x500.jpg',
        type:'dog',
        des:'Dave is vaccinated, micro-hipped, and sterilized.He is a sweet-natured pup who loves to play and snuggle with other bigger dogs and with people. He does not like cats',
      },
    ];

const pets2 =[
      {
        id: 'c',
        firstname: 'Mary',
        url: 'https://specials-images.forbesimg.com/imageserve/5de6f2d8c283810006a3947f/960x0.jpg?fit=scale',
        type:'cat',
        des:'Mary was literally thrown out of an apartment October/15 and luckily our foster lady lives next door and so we told her to bring her in which she did in mid November.It was soon determined that Mary was pregnant and she delivered her 2 kittens.',
      },
      {
        id: 'd',
        firstname: 'Dodo',
        url: 'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
        type:'dog',
        des:'Dodo is a bright girl who learns quickly when teaching her new things.- She is mentally and physically sensitive to new things however, with patience and encouragement she is learning to explore in a positive and calm manner.',
      },
    ];
const pets3 =[
      {
        id: 'e',
        firstname: 'Amy',
        url: 'https://newsd.co/wp-content/uploads/2018/02/cocker-spaniel-names.jpg',
        type:'dog',
        des: 'Amy is an athletic and intelligent girl.- She enjoys opportunities to hang out with her people, go for long leashed walks and play games.- Walks nicely on leash, does not jump up on her handlers and greets people politely.',
      },
      {
        id: 'f',
        firstname: 'Yoshi',
        url: 'https://i2.wp.com/www.paws.org/wp-content/uploads/2019/10/Alphie_cat_29864612_101115_profile_MB-2.jpg?fit=1024%2C583&ssl=1',
        type:'cat',
        des:'Yoshi is a shining example of how feral kittens can become domesticated. It took about 9 months and now he is actually the hoarder of any attention he sees, he craves it and what more could you want.',
      },
];

function searchingFor(term){
    return function(x){
        return x.type.toLowerCase().includes(term.toLowerCase())|| !term;
    }
}


class Search extends Component{
    constructor(props){
        super(props);
            this.state = {
                pets1 : pets1,
                term : "",
            }
            this.searchHandler = this.searchHandler.bind(this);
    
    }

    searchHandler(event){
        this.setState({term:event.target.value})
    }
    render(){
        const {term, pets} = this.state;
        return(
            <Container>
            <div className="Search">
            <br></br>
            <h4>Adoption</h4>
            <form>
                <input type="text" onChange={this.searchHandler} value={term} placeholder="Search Pet Type"></input>
            </form>
            </div>
            <div>
            <Row>
            <Col>
            <br />
                {
                    pets1.filter(searchingFor(term)).map(wanted =>
                            <div key={wanted.id}>
                            <div><img width="250px" height="250px" src={wanted.url}/></div>
                            <div><p style={{ fontWeight: 'bold', fontSize:25 }}>{wanted.firstname}</p></div>
                            <textarea readOnly style={{width:"250px", height:"150px", border:"None", outline:"None", resize:"none"}}>{wanted.des}</textarea>
                            <div><button style={{ width:"250px", height:"30px"}}><Link to="/book">Interested in Adoption</Link></button></div>
                            <br />
                            </div>
                        )
                }
            </Col>
            <Col>
            <br />
                {
                    pets2.filter(searchingFor(term)).map(wanted =>
                            <div key={wanted.id}>
                            <div><img width="250px" height="250px" src={wanted.url}/></div>
                            <div><p style={{ fontWeight: 'bold', fontSize:25 }}>{wanted.firstname}</p></div>
                            <textarea readOnly style={{width:"250px", height:"150px", border:"None", outline:"None", resize:"none"}}>{wanted.des}</textarea>
                            <div><button style={{ width:"250px", height:"30px"}}><Link to="/book">Interested in Adoption</Link></button></div>
                            <br />
                            </div>
                        )
                }
            </Col>
            <Col>
            <br />
                {
                    pets3.filter(searchingFor(term)).map(wanted =>
                            <div key={wanted.id}>
                            <div><img width="250px" height="250px" src={wanted.url}/></div>
                            <div><p style={{ fontWeight: 'bold', fontSize:25 }}>{wanted.firstname}</p></div>
                            <textarea readOnly style={{width:"250px", height:"150px", border:"None", outline:"None", resize:"none"}}>{wanted.des}</textarea>
                            <div><button style={{ width:"250px", height:"30px"}} ><Link to="/book">Interested in Adoption</Link></button></div>
                            <br />
                            </div>
                        )
                }
            </Col>
            </Row>
            </div>
            </Container>
        )
    }
}


export default Search;
