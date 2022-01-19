import '@testing-library/jest-dom'
import { render, fireEvent } from '@testing-library/vue'
import SCButton from '../index.vue'

describe('components/SEButton', () => {
  test('render button with text', () => {
    const id = 'sample-id'
    const { getByRole } = render(SCButton, {
      props: {
        id
      },
      slots: {
        default: 'button'
      }
    })

    const button = getByRole('button')
    expect(button).toHaveTextContent('button')
  })

  test('it has attributes id', () => {
    const id = 'sample-id'
    const { getByTestId, queryByTestId } = render(SCButton, {
      props: {
        id
      },
      slots: {
        default: 'button'
      }
    })
    const buttonId = getByTestId(id)
    expect(buttonId).toHaveAttribute('id', id)
    expect(queryByTestId(id)).toBeInTheDocument()
  })

  test('emits click event when button is clicked', async () => {
    const text = 'Click me'
    const { getByRole, emitted } = render(SCButton, {
      slots: {
        default: text
      }
    })
    const button = getByRole('button')
    // Send a click event.
    await fireEvent.click(button)

    expect(emitted()).toHaveProperty('click')
  })
})
