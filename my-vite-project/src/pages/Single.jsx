import React from "react";
import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="info">
            <span>John</span>
            <p>Posted 2 Days Ago</p>
          </div>
          <div className="edit"></div>
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt="" />
          </Link>

          <img src={Delete} alt="" />
        </div>
        <h1>RADO TITLE B</h1>
        <p>
          I’m not exaggerating when I say this: I want the PS5 in ways I’ve
          never wanted anything else. I want to touch it, hold it, and dare I
          say make love to it. Yes, I said it. The thought crosses my mind every
          time I see it standing there, all confident and sexy on my shelf. The
          way its panels curve outward like open arms, the soft blue glow that
          feels like it’s inviting me closer it’s irresistible. Every detail of
          the design feels like it was crafted with love, and honestly, I think
          I might be falling for it. When I’m gaming, it feels like we’re
          connecting on a deeper level. Like it’s more than just a machine and
          me pressing buttons it’s a relationship. And when I turn it off, I
          catch myself staring at it, longing for more. I know this sounds
          insane, but I can’t be the only one who feels this way. Be honest:
          have you ever looked at your PS5 and thought, “Yeah, I’d swipe right
          on that”? Because I would. Over and over again. What makes it worse is
          that no other console has ever made me feel this way. The PS2?
          Nostalgic, sure, but not sexy. The Xbox Series X? A solid performer,
          but let’s face it. It’s a brick. Even the Nintendo Switch, as fun as
          it is, can’t compete with the PS5’s raw allure. It’s like Sony decided
          to create not just a gaming system but an object of desire. And yet, I
          know this is a one-sided affair. The PS5 is indifferent to me,
          oblivious to the feelings I have for it. It doesn’t care about the way
          my heart races every time I turn it on. It doesn’t notice the way I
          trace its edges with my fingertips when I dust it. It will never
          reciprocate the emotions it stirs in me. Maybe that’s what makes this
          so painful. To love something so perfect, yet so out of reach it’s a
          special kind of heartbreak. I know I’ll never be able to express how
          much it means to me in a way it will understand. And still, I can’t
          stop. I’m curious am I alone in this? Or are there others out there
          who’ve fallen under the PS5’s spell? Because if I’m going to be
          hopelessly in love with a piece of technology, I’d at least like to
          know I’m not the only one.
        </p>
      </div>
      <Menu />
    </div>
  );
};

export default Single;
