import React, { useEffect, useRef, useState } from 'react';

const GameCanvas = ({ hero1Settings, hero2Settings }) => {
  const canvasRef = useRef(null);
  const [heroes, setHeroes] = useState({
    hero1: { x: 50, y: 100, speed: hero1Settings.speed, direction: 1, color: 'blue' },
    hero2: { x: 450, y: 100, speed: hero2Settings.speed, direction: 1, color: 'red' },
  });

  const [spells, setSpells] = useState([]);

  const handleClick = (hero) => {
    // Логика открытия меню для настройки героя
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const drawHero = (hero) => {
      ctx.beginPath();
      ctx.arc(hero.x, hero.y, 20, 0, Math.PI * 2);
      ctx.fillStyle = hero.color;
      ctx.fill();
      ctx.closePath();
    };

    const drawSpells = () => {
      spells.forEach((spell) => {
        ctx.beginPath();
        ctx.arc(spell.x, spell.y, 5, 0, Math.PI * 2);
        ctx.fillStyle = spell.color;
        ctx.fill();
        ctx.closePath();
      });
    };

    const update = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Обновление позиции героев
      setHeroes((prevHeroes) => {
        const updatedHeroes = { ...prevHeroes };
        Object.keys(updatedHeroes).forEach((key) => {
          const hero = updatedHeroes[key];
          hero.y += hero.speed * hero.direction;

          if (hero.y <= 20 || hero.y >= canvas.height - 20) {
            hero.direction *= -1;
          }
        });
        return updatedHeroes;
      });

      // Обновление позиции заклинаний
      setSpells((prevSpells) => prevSpells.map(spell => ({
        ...spell,
        x: spell.x + spell.speedX,
        y: spell.y + spell.speedY,
      })));

      // Проверка на столкновение заклинаний с героями

      drawHero(heroes.hero1);
      drawHero(heroes.hero2);
      drawSpells();
    };

    const interval = setInterval(update, 1000 / 60);
    return () => clearInterval(interval);
  }, [heroes, spells]);

  return <canvas ref={canvasRef} width={500} height={400} onClick={() => handleClick()} />;
};

export default GameCanvas;