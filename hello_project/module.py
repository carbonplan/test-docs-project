class HelloWorldClass:
    """Hello world class

    Parameters
    ----------
    name : str
        Name to say hi to
    """

    def __init__(self, name: str) -> None:

        self.name = name

    def greeting(self) -> str:
        """Method to generate the greeting

        Returns
        -------
        str
            The greeting
        """
        return f"Hello {self.name}"

    def print(self) -> None:
        """Print the greeting"""
        print(self.greeting())


def hello_world(name: str) -> str:
    """Hello world function

    Parameters
    ----------
    name : str
        Name to say hi to

    Returns
    -------
    greeting : str
        A simple greeting
    """
    return f"Hello {name}"
