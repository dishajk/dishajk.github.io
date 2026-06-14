---
title: Card Games, Magic Squares, and Tic-Tac-Toe 
layout: fieldnote
type: project
date: 2026-06-13
categories: [Learning and Teaching Resources]
tags: [mathematics, mathematics outreach, education, pedagogy, teaching, informal mathematics, mathematical thinking, outreach programmes, reflections]
comments: true
---
*In today's maths circle[^1] we were getting the students to arrive at a mathematical theory to explain games, starting with ways in which games can be classified, how they can be defined, etc. I realised that you do not actually need a lot of mathematics for the basics of game theory. They are accessible to almost anyone. If you have deck of cards, go grab it, will help to play along the rest of the article.*

Let me start by specifying the game. It is a two-player game, played with a partial deck of cards. Each player is dealt a hand that has cards from A to 9 from a single deck. e.g. Player X will have a hand of 10 cards, A to 9, belonging to, say, the suit of Hearts and Player Y will have a hand of 10 cards, A to 9 again, belonging to Club or Spade (It helps if one has the red and the other has the black cards). Players take turn, can play one card at a time, the first 3 cards you play should add up to 15 but you can 't play the same card your opponent did. e.g. You may plan to play 4, 5, 6 (adding up to 15). Let's say you played 4 in the first turn and your opponent plays 5 in their following turn, this means you can no longer play 5, you will have to play some other numbers and ensure that the next two numbers that you play adds up to 11 (15 - 4).

Play with me, I will be the first player.

<div id="history"></div>
<div id="input-area"></div>
<div id="status"></div>

<script>
(() => {

  // Winning triples in Number Scrabble
  const WIN_LINES = [
    [1,5,9],[1,6,8],[2,4,9],
    [2,5,8],[2,6,7],[3,4,8],
    [3,5,7],[4,5,6]
  ];

  const MAX_MOVES_PER_PLAYER = 3;

  // ---------- Game state ----------

  const myMoves = [2];      // Computer always starts with 2
  const yourMoves = [];

  // ---------- Utility ----------

  function hasWin(moves) {
    if (moves.length < 3) return false;

    for (const line of WIN_LINES) {
      if (line.every(x => moves.includes(x))) {
        return true;
      }
    }
    return false;
  }

  function availableMoves() {
    const used = new Set([...myMoves, ...yourMoves]);
    const out = [];
    for (let i = 1; i <= 9; i++) {
      if (!used.has(i)) out.push(i);
    }
    return out;
  }

  function render() {
    const h = document.getElementById("history");

    let html = "";

    html += "<p><strong>I play:</strong> 2</p>";

    for (let i = 0; i < yourMoves.length; i++) {
      html += `<p><strong>You play:</strong> ${yourMoves[i]}</p>`;

      if (i + 1 < myMoves.length) {
        html += `<p><strong>I play:</strong> ${myMoves[i + 1]}</p>`;
      }
    }

    h.innerHTML = html;

    // If game ended, remove controls
    if (
      hasWin(myMoves) ||
      hasWin(yourMoves) ||
      myMoves.length === MAX_MOVES_PER_PLAYER &&
      yourMoves.length === MAX_MOVES_PER_PLAYER
    ) {
      document.getElementById("input-area").innerHTML = "";
      return;
    }

    const avail = availableMoves();

    let controls = "<p><strong>Your play:</strong></p>";

    for (const x of avail) {
      controls += `
        <label style="margin-right:1em">
          <input type="radio" name="move" value="${x}">
          ${x}
        </label>
      `;
    }

    controls += `
      <br><br>
      <button id="submit-move">Submit</button>
    `;

    document.getElementById("input-area").innerHTML = controls;

    document
      .getElementById("submit-move")
      .addEventListener("click", onSubmit);
  }

  // ---------- Minimax ----------

  function minimax(my, yours, myTurn) {

  if (hasWin(my)) return 1;
  if (hasWin(yours)) return -1;

  // If the player whose turn it is has already used all 3 moves,
  // the game cannot continue.
  if (myTurn && my.length >= 3) return 0;
  if (!myTurn && yours.length >= 3) return 0;

  const used = new Set([...my, ...yours]);
  const avail = [];

  for (let i = 1; i <= 9; i++) {
    if (!used.has(i)) avail.push(i);
  }

  if (avail.length === 0) return 0;

  if (myTurn) {

    let best = -Infinity;

    for (const move of avail) {
      best = Math.max(
        best,
        minimax([...my, move], yours, false)
      );
    }

    return best;

  } else {

    let best = Infinity;

    for (const move of avail) {
      best = Math.min(
        best,
        minimax(my, [...yours, move], true)
      );
    }

    return best;
  }
}

  function chooseBestMove() {

    const avail = availableMoves();

    let bestMove = null;
    let bestScore = -Infinity;

    for (const move of avail) {

      const score =
        minimax(
          [...myMoves, move],
          [...yourMoves],
          false
        );

      if (score > bestScore) {
        bestScore = score;
        bestMove = move;
      }

    }

    return bestMove;
  }

  // ---------- User move ----------

  function onSubmit() {

    const selected =
      document.querySelector('input[name="move"]:checked');

    if (!selected) {
      alert("Choose a number.");
      return;
    }

    yourMoves.push(parseInt(selected.value, 10));

    if (hasWin(yourMoves)) {
      render();
      document.getElementById("status").innerHTML =
        "<p><strong>You win!</strong></p>";
      return;
    }

    if (
      myMoves.length < MAX_MOVES_PER_PLAYER
    ) {

      const mine = chooseBestMove();

      if (mine !== null) {
        myMoves.push(mine);
      }

      if (hasWin(myMoves)) {
        render();
        document.getElementById("status").innerHTML =
          "<p><strong>I win!</strong></p>";
        return;
      }

    }

    if (
      myMoves.length === MAX_MOVES_PER_PLAYER &&
      yourMoves.length === MAX_MOVES_PER_PLAYER
    ) {
      render();
      document.getElementById("status").innerHTML =
        "<p><strong>Draw.</strong></p>";
      return;
    }

    render();
  }

  render();

})();
</script>

References

[^1]: [ICTS-RRI Maths Circle Session 62](https://www.icts.res.in/content/icts-rri-maths-circle-session-62)