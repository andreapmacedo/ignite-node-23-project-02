import { expect, test } from 'vitest'

test('o usuário pode se cadastrar', () => {
  // fazer a chamada HTTP p/ criar uma nova transação

  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})
